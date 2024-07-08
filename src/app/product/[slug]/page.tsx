type DetailProductPageProps = {params: {slug: string}} 

const DetailProductPage = (props: DetailProductPageProps) => {
    const { params } = props;
    console.log(params)
    return(
        <div>
            <h1>Detail Product Page</h1>
            <h1>{params.slug}</h1>
        </div>
    )
}

export default DetailProductPage