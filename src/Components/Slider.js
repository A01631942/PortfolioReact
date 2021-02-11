import {Fragment} from "react";
import TitlesShow from "./TitlesShow";
var index;
var selectedElement;
var num;

// change slide to the next one
function nextSlide(titles, type) {
    // if smaller than small (576px), display1
    window.innerWidth<768?num=1
    // if smaller than large (992px), display2
    :window.innerWidth<992?num=2
    // otherwise, its larger than large (992px), display3
    :num=3

    // Loop depending on the display, sm:1, lg:2, xl:3
    for (var i=0; i<num; i++){
        // encontrar el texto que está en display, si hay texto guardarlo, si no, no hacer nada
        if(document.getElementById(`text${i+1}`)!=null){
            selectedElement = document.getElementById(`text${i+1}`).innerText
            // console.log(selectedElement);
        }
        
        // encontrar el índice del texto que está en display
        index = titles.findIndex (tool => type==="portfolio" ? tool.project === selectedElement:tool.title===selectedElement);
        // revisar, si el índice es el último, cambiar el índice a 1 para mostrar el siguiente elemento
        if (index===(titles.length-1)){   // si era el último elemento, cambiar a 0 para mostrar el primer elemento
            index = 0;
        } else{
            index= index+1;
        }
        // console.log(index);
        // console.log("next"+next);

        if(document.getElementById(`text${i+1}`)!=null){
        //     // mostrar el siguiente elemento
             type==="portfolio"? 
             document.getElementById(`text${i+1}`).innerText=titles[index].project
            :document.getElementById(`text${i+1}`).innerText=titles[index].title

            document.getElementById(`text${i+1}`).href=titles[index].route
        }
    }
}

// show previos element
function prevSlide(titles, type) {
    // if smaller than small (576px), display1
    window.innerWidth<768?num=1
    // if smaller than large (992px), display2
    :window.innerWidth<992?num=2
    // otherwise, its larger than large (992px), display3
    :num=3

    // Loop depending on the display, sm:1, lg:2, xl:3
    for (num; num>0; num--){
        // encontrar el texto que está en display, si hay texto guardarlo, si no, no hacer nada
        if(document.getElementById(`text${num}`)!=null){
            selectedElement = document.getElementById(`text${num}`).innerText

            // encontrar el índice del texto que está en display
             {type==="portfolio"? 
             index = titles.findIndex(tool => tool.project === selectedElement)
            :index = titles.findIndex(tool => tool.title === selectedElement);}

            if (index===0){
                // si era el último elemento, cambiar a 0 para mostrar el 1 elemento
                index = titles.length-1;
            } else{
                // sino, sumar 1, porque muestra el sig elemento
                index= index-1;
            }
            
            // change content of div
             type==="portfolio"? 
             document.getElementById(`text${num}`).innerText=titles[index].project
            :document.getElementById(`text${num}`).innerText=titles[index].title

            document.getElementById(`text${num}`).href=titles[index].route
        }
    }
}

const Slider = ({titles, type, active}) => {
    return ( 
        <Fragment>            
            {/* show titles (ux, ui, front, modleing) */}
            <TitlesShow type={type} active={active}/>

            {/* header before break */}
            {type==="portfolio"?<h5 className="mt-2 mt-lg-5">All Projects</h5>
            :<h5 className="mt-3 mt-lg-5">All Tools</h5>}
            
            <hr></hr>
                
                {/* slider */}
                <div className="row justify-content-around">
                    <div className="col-1">
                        <button className="btn btn-sm next-prev" onClick={()=>{prevSlide(titles, type)}}>&#10094;</button>
                    </div> 

                    {/* if 1 element in array, show 1 div */}
                    <div className="col-8 col-sm-5 col-lg-3 text-center">
                        <a id="text1" href={titles[0].route} className="slider">{type==="portfolio"?titles[0].project:titles[0].title}</a>{/* if type portfolio, will return titles.project, otherwise, titles.title */}
                    </div>
                    {titles.length===2?
                    /* if 2 elements in array, show 2 divs */
                    <div className="col-8 col-sm-5 col-lg-3 text-center d-none d-md-block">
                        <a id="text2" href={titles[1].route} className="slider">{type==="portfolio"?titles[1].project:titles[1].title}</a>
                    </div>
                    :titles.length>2?
                    /* if 3 or more elements in array, show 3 divs */
                    <Fragment><div className="col-8 col-sm-5 col-lg-3 text-center d-none d-md-block">
                        <a id="text2" href={titles[1].route} className="slider">{type==="portfolio"?titles[1].project:titles[1].title}</a>
                    </div>
                    <div className="col-3 text-center d-none d-lg-block">
                        <a id="text3" href={titles[2].route} className="slider">{type==="portfolio"?titles[2].project:titles[2].title}</a>  
                    </div></Fragment>
                    :null}


                    <div className="col-1">
                        <button className="btn btn-sm next-prev " onClick={()=>{nextSlide(titles, type)}}>&#10095;</button>
                    </div> 
                </div>

                <hr></hr>
        </Fragment>
    );
}
 
export default Slider;