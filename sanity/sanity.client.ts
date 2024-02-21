// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'


const config: ClientConfig = {
  projectId: "mni5vnd7",
  dataset: "production",
  apiVersion: "2024-02-06",
  useCdn: false,
};



const client = createClient(config);




export default client;