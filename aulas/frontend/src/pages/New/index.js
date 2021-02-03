import React, {useState, useMemo} from 'react';
import camera from '../../assets/camera.svg';
import './styles.css'
export default function New (){
    const [thumbnail, setThumbnail] = useState (null)
    const [ company, setCompany] = useState ('');
    const [ techs, setTechs] = useState ('');
    const [ price, setPrice] = useState ('');
    


    function handleSubmit () {

    }
    return (
        <form onSubmit={handleSubmit}>
            <label id="thumbnail">
                <input type="file" onChange={ event => setThumbnail(event.target.files [0])}/>
                <img src={camera} alt="Select img" />
                
                

            </label>
            <label htmlFor="company"> EMPRESA *</label>
            <input
            id="company"
            placeholder="Sua empresa incrivel"
            value={company}
            onChange={event => setCompany(event.target.value)}
            
            ></input>


            <label htmlFor="company"> TECNOLOGIAS * <span>(separadas por virgula)</span></label>
            <input
            id="techs"
            placeholder="Quais tecnologias usam"
            value={techs}
            onChange={event => setTechs (event.target.value)}
            
            ></input>

            <label htmlFor="company"> VALOR DA DIARIA * <span>(em branco para gratuito)</span></label>
            <input
            id="price"
            placeholder="Valor cobrado por dia"
            value={price}
            onChange={event => setPrice (event.target.value)}
            
            ></input>

            <button type="submit" className="btn">Cadastrar </button>


        </form>
        
    )
}
