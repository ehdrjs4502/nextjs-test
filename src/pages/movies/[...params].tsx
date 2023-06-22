import { useRouter } from "next/router"
import HeadTitle from "@/components/HeadTitle";

export default function detail({params}:any) {
    const router = useRouter();
    const [title, id] = params.params || [];
    return (
        <div>
            <HeadTitle title={title}/>
            <h4>{title}</h4>
        </div>
    )
}

export async function getStaticProps({params}:any) {
    return {
        props: {params},
    }  
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    }
}