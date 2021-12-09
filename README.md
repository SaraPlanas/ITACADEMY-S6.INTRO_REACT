# ITACADEMY-S6.INTRO_REACT
SEXTO SPRINT DEL CURSO DE REACT DE IT ACADEMY

En aquest lliurament posarem en pràctica els conceptes bàsics que has après de React. Un client que té com a producte principal una web de gestió empesarial desenvolupada amb React, ens ha demanat que desenvolupem un tutorial, en la qual mitjançant dos botons els nous usuaris puguin avançar i retrocedir en els consells, modificant-se el text d'ajuda i la imatge de fons.

Nivell 1
- Exercici 1
En aquest primer exercici, crearem un component que s'encarregarà de renderitzar una frase, i l’importarem i usarem en el component principal App.
1. Crear la carpeta components
2. Crear la carpeta escena dins de la carpeta components
3. Dins de la carpeta escena implementarem el primer component. Per a això crear el fitxer Escena.js. Aquest primer component només ha de retornar el següent string:
"El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"
4. Ja tenim el nostre primer component creat, però encara no es mostrarà la frase. Per a això usarem el nostre flamant component Escena. En el return del component app has d'usar el component Escena.

- Exercici 2
Genial, ja tens el primer component creat i funcionant. De moment només es mostra una frase, en aquest exercici farem que es mostrin totes les frases de la història. 
1. Llegirem els dades d'un un arxiu json amb els textos de la història en el component App:
[
  "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
  "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
  "L'heroi va decidir travessar la porta que el portava a casa",
  "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
]
2. S'ha de passar per props cadascun dels textos de la història al component Escena. (El component escena renderitzarà una sola línia de text)
3. Modificarem el component Escena per a mostrar totes les línies de text obtingudes del component pare App mitjançant props.

- Exercici 3
És moment d'aplicar estils al nostre component Escena. Has de maquetar aquest component utilitzant styled-components

- Exercici 4
Mostrarem totes les línies de l’aplicació però ressaltarem només una de cada vegada, que anirà canviant a mesura que premem els botons d’avançar o retrocedir


Nivell 2
- Exercici 5
Seria convenient mostrar a l'usuari una pantalla inicial de benvinguda, que contingui la descripció del projecte i un botó començar. En aquest exercici has d'usar el renderitzat condicional.

Nivell 3
- Exercici 6
Ja només et falta modificar la imatge de fons conforme l'usuari vagi canviant de frase. 
Modificar el fitxer JSON i convertir-l'en un fitxer JS amb un array d'objectes. Cada objecte tindrà dues propietats: txt i img:
- Txt serà la propietat que emmagatzemarà el text de l'escena
- img serà la propietat que emmagatzemarà la imatge de fons que és veurà a la pantalla.
