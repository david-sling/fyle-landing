import c1 from "../assets/carousal-1.png";
import c2 from "../assets/carousal-2.png";
import c3 from "../assets/carousal-3.jpg";
import c4 from "../assets/carousal-4.png";
import {
  Camera,
  CloudOutlined,
  FavoriteOutlined,
  SpaOutlined,
} from "@material-ui/icons";

const carousal = [
  {
    image: c1,
    title: "SNOW",
    description:
      "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
    icon: Camera,
    link: "http://fylehq.com",
  },
  {
    image: c2,
    title: "BEAUTY",
    description:
      "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
    icon: CloudOutlined,
    link: "http://fylehq.com",
  },
  {
    image: c3,
    title: "FLOWERS",
    description:
      "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
    icon: SpaOutlined,
    link: "http://fylehq.com",
  },
  {
    image: c4,
    title: "Fruits",
    description:
      "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque",
    icon: FavoriteOutlined,
    link: "http://fylehq.com",
  },
];

export default carousal;
