import {Rule} from "@sanity/types"

export default {
    name:"mainImage",
    type:"document",
    title:"MainImage",
    fields: [
        {
            name: "image1",
            title: "MainImage",
            type: "image",
            options: {
              hotspot: true, // Enables the image hotspot feature
            },
            validation: (Rule: Rule) =>
              Rule.required().warning("Please upload a product image."),
          },
          {
            name: "image2",
            title: "MainImage",
            type: "image",
            options: {
              hotspot: true, // Enables the image hotspot feature
            },
            validation: (Rule: Rule) =>
              Rule.required().warning("Please upload a product image."),
          },
          {
            name: "image3",
            title: "MainImage",
            type: "image",
            options: {
              hotspot: true, // Enables the image hotspot feature
            },
            validation: (Rule: Rule) =>
              Rule.required().warning("Please upload a product image."),
          },
          {
            name: "image4",
            title: "MainImage",
            type: "image",
            options: {
              hotspot: true, // Enables the image hotspot feature
            },
            validation: (Rule: Rule) =>
              Rule.required().warning("Please upload a product image."),
          },
          {
            name: "image5",
            title: "MainImage",
            type: "image",
            options: {
              hotspot: true, // Enables the image hotspot feature
            },
            validation: (Rule: Rule) =>
              Rule.required().warning("Please upload a product image."),
          },
          {
            name: "image6",
            title: "MainImage",
            type: "image",
            options: {
              hotspot: true, // Enables the image hotspot feature
            },
            validation: (Rule: Rule) =>
              Rule.required().warning("Please upload a product image."),
          },
    ],
   
  
}
