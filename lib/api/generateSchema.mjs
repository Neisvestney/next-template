import * as dotenv from 'dotenv'
import fs from "node:fs";
import openapiTS from "openapi-typescript";
import axios from "axios";

dotenv.config()

const pathsToFix = ['/common', '/home-page', '/cases-page', '/contacts-page']

console.log("Downloading schema")

const remoteSwagger = await axios.get(process.env.NEXT_PUBLIC_STRAPI_URL + "/documentation/v1.0.0/")
const remoteSchema = JSON.parse(remoteSwagger.data.split("spec: ")[1].split(",\n          dom_id: '#swagger-ui'")[0])

console.log("Fixing schema")

Object.values(pathsToFix).forEach((key) => {
    const item = remoteSchema.paths[key].get.responses["200"].content["application/json"].schema["$ref"]
    remoteSchema.paths[key].get.responses["200"].content["application/json"].schema["$ref"] = item.replace("List", "")
})

console.log("Generating TypeScript schema")

const schema = await openapiTS(remoteSchema);

console.log("Saving to file")

await fs.writeFile("./lib/api/schema.ts", schema, () => {})

// console.log(schema)
