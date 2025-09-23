import { Target } from "lucide-react";

const AboutCard = ({
    icon: Icon,
    title,
    text,
}) => {
    return (
        <div className="p-6 border border-black/10 rounded-xl text-center shadow-medium hover:shadow-xl bg-gradient-card shadow-lg transition-all duration-300"> 
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
            <p className="text-black/50 leading-relaxed">
                {text}
            </p>
        </div>
    )
}

export default AboutCard;