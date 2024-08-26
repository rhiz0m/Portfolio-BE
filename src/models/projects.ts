import { v4 as uudiv4} from "uuid"

export let projects = [
  {
    id: uudiv4(),
    title: "React. FE-Project",
    date: "2024-08-20",
    content:
      "This is a Front End project where I used an React-app to connect with the Backend",
    author: "Andreas",
  },
  {
    id: uudiv4(),
    title: "Node/Express. Project",
    date: "2024-08-20",
    content:
      "This is a Back End project where I used an Node and Express to connect with the Front End",
    author: "Andreas",
  },
  {
    id: uudiv4(),
    title: "IOS. Project",
    date: "2024-08-20",
    content: "This is an IOS-project where I used Swift and SwiftUI",
    author: "Andreas",
  },
]
