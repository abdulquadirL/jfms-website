import News from "@/components/News";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

export default async function ArticlePage() { //{data}:{data: any}
    const data = await fetch('http://localhost:1337/api/home-page?populate[blocks][on][layout.hero][populate]=*')
  const articles = await data.json()
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-700 text-green-200">
            
            
        </div>
    )
}