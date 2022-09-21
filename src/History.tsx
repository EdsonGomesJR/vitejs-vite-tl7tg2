import { useParams } from "react-router-dom";

interface SomeProps {
  title: string;
}
export function History (){
  const {id} = useParams();
 
  return(
    <h1 className="text-white"> { id}</h1>
  )
}