import ImageComponent from "./image-component";
import TextComponent from "./text-component";

export default function CardComponent(){
    return (
        <div className="card">
            <ImageComponent />
            <div className="container">
                <TextComponent />
            </div>
        </div>
    )
}