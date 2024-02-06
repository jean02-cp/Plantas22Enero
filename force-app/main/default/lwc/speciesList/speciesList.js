import { LightningElement } from 'lwc';

export default class SpeciesList extends LightningElement {
    species = [
        {
         Name: "Jazmin",
         Descripcion_c: "Olorosa y bonita planta trepadora",
         imagen_URL__c: "https://www.hogarmania.com/archivos/202301/caracteristicas-cuidados-del-jazmin-848x477x80xX.jpg",
         Localalizacion__c: "Indoors, Outdoors"
        },
        {
            Name: "Aloe vera",
            Descripcion_c: "Conocida por sus propiedadees medicinales y aplicacion a la piel",
            imagen_URL__c: "https://sicarfarms.com/wp-content/uploads/2021/01/Aloe-Vera.png",
            Localalizacion__c: "Outdoors"
        },
        {
            Name: "Hierbabuena",
            Descripcion_c: "Aromatica  de huela de maravilla, muy usada enla gastronomia, en la medicina papular",
            imagen_URL__c: "https://cdn0.ecologiaverde.com/es/posts/9/2/2/hierbabuena_propiedades_beneficios_y_como_tomar_4229_600.webp",
            Localalizacion__c: "Outdoors"
        }
    ];
}