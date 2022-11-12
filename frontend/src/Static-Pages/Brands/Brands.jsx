import React from 'react'
import "./Brands.css"
// import {useRef} from 'react'
import {Link} from 'react-router-dom';
function Brands() {
    let all = document.querySelectorAll("#v-main2 > p");
    all.forEach((el)=>{
        el.addEventListener("click", ()=>{
            goTo(el.innerText)
        })
    })
    
    function goTo(x){
        let here = document.getElementById(x);

        here.scrollIntoView({behavior:"smooth"});
        console.log("HOGAYA")
    }
    return (
    <>
  
 

   
    <h1 className='brand'>Brands</h1>
   <Link to='/Holiday'>
<div id="v-main2">
    <p>A</p>
    <p>B</p>
    <p>C</p>
    <p>D</p>
    <p>E</p>
    <p>F</p>
    <p>G</p>
    <p>H</p>
    <p>I</p>
    <p>J</p>
    <p>K</p>
    <p>L</p>
    <p>M</p>
    <p>N</p>
    <p>O</p>
    <p>P</p>
    <p>Q</p>
    <p>R</p>
    <p>S</p>
    <p>T</p>
    <p>U</p>
    <p>V</p>
    <p>W</p>
    <p>X</p>
    <p>Y</p>
    <p>Z</p>
    <p>#</p>
   </div>
    
</Link>
   

   <div className="v-cont" id="A">
    <p>A</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL</div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

   
   <div className="v-cont" id="B">
    <p>B</p>
   </div>
   <div className="v-cont_sub">
    <div>        
Baby Foot
</div>
    <div>
        Bala
        </div>
    <div>
beautyblender
       </div>
    <div>
        BeautyStat Cosmetics
       </div>
    <div>
       
        Beneath Your Mask
        
        </div>
    <div>
       
        Biophile
      
       </div>
    <div>
       
        Bloomeffects
      
       </div>
    <div>
       
        Bluemercury
        
        </div>
    <div>

Bobbi Brown
       </div>
    <div>
        Bouclème
       
        </div>
    <div>
        Bumble and bumble
    </div>

    <div>
        BY TERRY
    </div>

   </div>

   
   <div className="v-cont" id="C">
    <p>C</p>
   </div>
   <div className="v-cont_sub">
    <div>
        Chantecaille
    </div>
    <div>
        Christophe Robin
        </div>
    <div>
         Clarins
       </div>
    <div>
        
        Clinique
       
       </div>
    <div>
        
        CORPUS
       
        </div>
    <div>
      
        Costa Brazil
       </div>



   </div>

   
   <div className="v-cont" id="D">
    <p>D</p>
   </div>
   <div className="v-cont_sub">
    <div>
        
        Deborah Lippmann
       
    </div>
    <div>
       
        Dermaflash
      
        </div>
    <div>
      
         Dermalogica
        
       </div>
    <div>
       
        diptyque
        
       </div>
    <div>
       
        Dr. Barbara Sturm
      
        </div>
    <div>
       
        Dr. Janine Mahon
        
       </div>
    <div>
      
        drybar
        
       </div>
    <div>
      
        Dyson
        </div>


   </div>

   
   <div className="v-cont" id="E">
    <p>E</p>
   </div>
   <div className="v-cont_sub">
    <div>
        
        Ebi
       
    </div>
    <div>
       
        Ellis Brooklyn
       
        </div>
    <div>
        
         EltaMD
        
       </div>
    <div>
       
        Esker
        
       </div>
    <div>
       
        Estée Lauder
        </div>



   </div>

   
   <div className="v-cont" id="F">
    <p>F</p>
   </div>
   <div className="v-cont_sub">
    <div>

FOREO
    </div>
    <div>
       
        Fornasetti Profumi
       
        </div>
    <div>
         
         Fresh
        
       </div>
    <div>
        
        Fur
       
       </div>
    <div>
      
        Furtuna Skin
        </div> 



   </div>

   
   <div className="v-cont" id="G">
    <p>G</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL</div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

   
   <div className="v-cont" id="H">
    <p>H</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL
    </div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

   
   <div className="v-cont" id="I">
    <p>I</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL</div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

   
   <div className="v-cont" id="J">
    <p>J</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL</div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

   
   <div className="v-cont" id="K">
    <p>K</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL</div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

   
   <div className="v-cont" id="L">
    <p>L</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL</div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

   
   <div className="v-cont" id="M">
    <p>M</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL</div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

   
   <div className="v-cont" id="N">
    <p>N</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL</div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

   
   <div className="v-cont" id="O">
    <p>O</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL</div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

   
   <div className="v-cont" id="P">
    <p>P</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL</div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

   
   <div className="v-cont" id="Q">
    <p>Q</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL</div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

   
   <div className="v-cont" id="R">
    <p>R</p>
   </div>
   <div className="v-cont_sub">
    <div>
        ABEL</div>
    <div>
        Acqua di Parma
        </div>
    <div>
         Act+Acre
       </div>
    <div>
        African Botanics
       </div>
    <div>
        Agent Nateur
        </div>
    <div>
        Alo
       </div>
    <div>
        Alpyn Beauty
       </div>
    <div>
        AMASS
        </div>
    <div>
Aromatherapy Associates
       </div>
    <div>
        Augustinus Bader
        </div>
    <div>
        Avène
    </div>

    <div>
        Agent Nateur
    </div>


   </div>

 



    </>
  )
}


export default Brands

