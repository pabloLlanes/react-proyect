import Jaula from './Jaula';

function JurassicPark() {

    const urlImagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZ8BYJSggnLXN7_WnAPxL7r2I4j84lXrLmPrbbVwgQA&s';

    const jaulas = [
        {
            rigurosidad: 'Alta',
            proteccion: 'Máxima',
            dinosaurios: [
                { nombre: 'T-Rex', especie: 'Tyrannosaurus Rex' },
                { nombre: 'Velociraptor', especie: 'Velociraptor Mongoliensis' },
                { nombre: 'Spinosaurus', especie: 'Spinosaurus Aegyptiacus' },
                { nombre: 'Allosaurus', especie: 'Allosaurus Fragilis' }
            ]
        },
        {
            rigurosidad: 'Media',
            proteccion: 'Moderada',
            dinosaurios: [
                { nombre: 'Triceratops', especie: 'Triceratops Horridus' },
                { nombre: 'Stegosaurus', especie: 'Stegosaurus Ungulatus' },
                { nombre: 'Ankylosaurus', especie: 'Ankylosaurus Magniventris' },
                { nombre: 'Brachiosaurus', especie: 'Brachiosaurus Altithorax' }
            ]
        },
        {
            rigurosidad: 'Baja',
            proteccion: 'Básica',
            dinosaurios: [
                { nombre: 'Dilophosaurus', especie: 'Dilophosaurus Wetherilli' },
                { nombre: 'Gallimimus', especie: 'Gallimimus Bullatus' },
                { nombre: 'Pteranodon', especie: 'Pteranodon Longiceps' },
                { nombre: 'Compsognathus', especie: 'Compsognathus Longipes' }
            ]
        }
    ];

    return (
        <div>
            <h1>Jurassic Park</h1>

            <img src={urlImagen} alt="Jurassic Park" />

            {jaulas.map((jaula, index) => (
                <Jaula
                    key={index}
                    rigurosidad={jaula.rigurosidad}
                    proteccion={jaula.proteccion}
                    dinosaurios={jaula.dinosaurios}
                />
            ))}
        </div>
    );
}

export default JurassicPark;
