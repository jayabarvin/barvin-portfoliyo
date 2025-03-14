import React from "react";
import './MyWork.css';
import head_bg from '../../Assets/Background/Meet_your_Posher__Claire-removebg-preview-removebg-preview.png';
import project_one from '../../Assets/project_pictures/Printable_Tic-Tac-Toe_Templates___Blank_PDF_Game_Boards___Tim_s_Printables-removebg-preview (1).png';
function Mywork(){


    return(
        <div id="mywork" className="mywork">
            <div className="work-title">
                <h1>My Work</h1>
                <div className="work-image-div">
                <img src={head_bg} alt="" width={200} srcset="" />
                </div>
            </div>
            <div className="myworcontainer">
                <div className="works"><a href="https://tic-tac-toe-60028091725.development.catalystserverless.in/app/index.html" rel="noreferrer" target="_blank"><img src={project_one} alt="TIC TAC TOE GAME" srcset="" /></a></div>
                <div className="works"><a href="http://" ><img src="" alt="" srcset="" /></a></div>
                <div className="works"><a href="http://" ><img src="" alt="" srcset="" /></a></div>
            </div>
            <div className="mywork-container-tittle">
                <h2>Tic Tac Toe Game <br />Using in React <br /><a href="https://tic-tac-toe-60028091725.development.catalystserverless.in/app/index.html" rel="noreferrer" target="_blank"><button>Click to play</button></a></h2>
                <h2>E-Commerce Website <br />Using in React <br /><button>Click to Purchase</button></h2>
                <h2>Crud Operation <br />Using PHP & MySql <br /><button>Click to Crud</button></h2>
            </div>

        </div>
    )
}
export default Mywork ;