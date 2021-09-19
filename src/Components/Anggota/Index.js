import { useContext, useState, createContext } from "react";


const themes = {
    light: {
        text: "Light",
        background: "rgb(255, 195, 0)",
    },
    dark: {
        text: "Dark",
        background: "rgb(144, 12, 63)",
    },
};

const ThemeContext = createContext();

export default function Context() {
    const [show, setShow] = useState(false);
    const [valueTheme, setValueTheme] = useState(themes.dark);

        function num1() {
            setValueTheme(valueTheme === themes.light ? themes.dark : themes.light)
        }
        function num2() {
            setShow(!show)
        }

    return (
        <ThemeContext.Provider value={valueTheme}>
            <div className="contentWrapper" style={{ backgroundColor: valueTheme.background, padding:40}}>
                <h1 className="anggota">Praktikum RPLBK</h1>
                <h2>Tugas Modul 4</h2>
                <h4>Kelompok 22</h4>
                    {show && (
                        <Content tema={valueTheme}/>
                    )}
                
                <button className="Button" onClick={() => { num1(); num2() }}> More </button>
            </div>
        </ThemeContext.Provider>
    );
}

function Content(props){
    const Data = [
        {
            nama: "Khusnul Khotimah",
            nim: "21120118120022",
            kel: "22",
        },
        {
            nama: "Muchammad Ibnu Maulana",
            nim: "21120118130046",
            kel: "22",
        }
    ]

    return (
        <div>
            <div className="center">
                {Data.map((p) => (
                    <div className="property-card">
                        <div className="property-image" style={{ backgroundImage: `url(${p.image})`}}>
                        <div className="property-image-title">
                        </div>
                        </div>
                        <div className="property-description">
                            <h5 style={{ color:"#e04e12"}}> {p.nama} </h5>
                            <p>{p.nim}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


function Text(props) {
  const theme = useContext(ThemeContext);
  return (
    <p
      className={`titleContext ${theme === themes.light ? "dark" : "light"}`}>
    
    </p>
  );
}
