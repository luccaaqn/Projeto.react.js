import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../axios";
import { Card, DescCard, DuracaoCard, ImgCard, SobreCard, SubtituloCard, Titulo, TituloCard } from "./styles";

export const Detalhes = () => {
    const [dados, setDados] = useState()
    const {id} = useParams()

    async function buscar_curso(){
        const {data} = await api.get(id)
        setDados(data)
    }

    useEffect(()=>{
        buscar_curso()
    }, [])

    return(
        <>
            <Titulo>Detalhes</Titulo>
            {dados && 
            <Card>
                <TituloCard>{dados.titulo}</TituloCard>
                <SubtituloCard>{dados.subtitulo}</SubtituloCard>
                <ImgCard src={dados.fotos}/>
                <DescCard>{dados.descricao}</DescCard>
                <DuracaoCard>{dados.duracao}</DuracaoCard>
                <SobreCard>{dados.sobre}</SobreCard>
            </Card>}
            
        </>
    )
}

