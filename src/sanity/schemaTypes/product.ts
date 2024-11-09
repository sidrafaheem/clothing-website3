export default{
    name:"product",
    type:"document",
    title:"Product",
    fields:[
      {
        name:"name",
        type:"string",
        title:"Name of Product"
      },
      {
        name: "images",
        type: "array",
        title: "Product Images",
        of: [{ type: "image" }],
        options: {
          layout: "grid",
        },
      },
      {
        name: "hoverImage",
        type: "image",
        title: "Hover Image",
        options: {
          hotspot: true,
        },
      },
      {
        name:"description",
        type:"text",
        title:"Description of Product",
      },
      {
        name:"slug",
        type:"slug",
        title:"Product Slug",
      },
      {
        name:"price",
        title:"Price",
        type:"number"
      },
      {
        name:"category",
        title:"Product Category",
        type:"reference",
        to:[
          {
            type:"category"
          },
        ],
      },
      
    ],
  }
  