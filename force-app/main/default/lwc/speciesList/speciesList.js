import { LightningElement, wire } from 'lwc';
import getAllEspecies from "@salesforce/apex/SpeciesServis.getAllEspecies";
export default class SpeciesList extends LightningElement {

    @wire(getAllEspecies)
    species;
    // specie.data --> datos devueltas por apex
    // specie.error --> si error se almacena aqui
}






    
   