interface TitleProps {
    title: string
}

const Title = ({ title }: TitleProps) => {
    return (
        <h1 className="uppercase font-bold mb-7 text-center text-4xl">
           {title} 
        </h1>
    )
}

export default Title