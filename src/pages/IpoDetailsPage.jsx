import { useParams } from "react-router-dom"


const IpoDetailsPage = () => {
    const {companyName} = useParams()
    return <div>{companyName}</div>
}

export default IpoDetailsPage