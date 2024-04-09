import { FaAward } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import data from "../portfolio/data";

function calculateDaysSince(startDate) {
  const start = new Date(startDate);
  const currentDate = new Date();
  let yearsDifference = currentDate.getFullYear() - start.getFullYear();
  let monthsDifference = currentDate.getMonth() - start.getMonth();

  // Adjust years and months if needed
  if (monthsDifference < 0) {
    yearsDifference--;
    monthsDifference += 12;
  }
  console.log(yearsDifference, monthsDifference);
  if (yearsDifference > 0) {
    return (
      yearsDifference + " " + "year" + " " + monthsDifference + " " + "months"
    );
  } else {
    return monthsDifference + " " + "months";
  }
}
const value = [
  {
    id: 1,
    icon: <FaAward />,
    title: "Experience",
    desc: calculateDaysSince("2023-09-20"),
  },
  {
    id: 2,
    icon: <TbBooks />,
    title: "Projects",
    desc: data.length + " " + "complete",
  },
];

export default value;
