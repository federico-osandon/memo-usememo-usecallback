import { useEffect, useState, useMemo, useCallback } from "react";
import ItemList from "./ItemList";
import "./styles.css";

const users = [
  { id: "1", name: "Fede1" },
  { id: "2", name: "Fede2" },
  { id: "3", name: "Fede3" },
  { id: "4", name: "Juan" }
];

export default function App() {
  const [usuarios, setUsuarios] = useState(users);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [bool, setBool] = useState(true);

  const handleEstado = () => {
    setBool(!bool);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAgregar = () => {
    setUsuarios([...usuarios, { id: usuarios.length + 1, name: text }]);
  };

  const handleDelete = useCallback(
    (id) => {
      setUsuarios(usuarios.filter((user) => user.id !== id));
    },
    [usuarios]
  ); // se contruye por cada render, y se guarda en una pocisión de memoria distinta

  // const handleDelete = (id) => {
  //   setUsuarios(usuarios.filter((user) => user.id !== id));
  // }; // se contruye por cada render, y se guarda en una pocisión de memoria distinta

  const handleFilter = () => {
    setSearch(text);
  };

  // const filteredUsers = useMemo(()=> process, [])
  // const usuariosFiltrados = useMemo(()=> process, [search, users])
  const usuariosFiltrados = useMemo(
    () =>
      usuarios.filter((user) => {
        // console.log("filter Process");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, usuarios]
  ); // problema ->

  // const usuariosFiltrados = usuarios.filter((user) => {
  //   console.log("filter Process");
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  useEffect(() => {
    console.log("app render");
  });
  // console.log(usuarios);

  const printUsers = useCallback(() => {
    console.log("change users", usuarios);
  }, [usuarios]);

  useEffect(() => {
    printUsers();
  }, [usuarios, printUsers]);

  return (
    <div className="App">
      <button onClick={handleEstado}>cambiar estado</button>
      <br />
      <input type="text" name="text" value={text} onChange={handleChange} />
      <button onClick={handleAgregar}>agregar</button>
      <button onClick={handleFilter}>Buscar</button>
      <ItemList productos={usuariosFiltrados} handleDelete={handleDelete} />
    </div>
  );
}
