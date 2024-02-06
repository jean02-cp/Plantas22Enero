public with sharing class SpeciesServis {
  @AuraEnabled(cacheable=true)
  public static List<Especies__c> getAllEspecies() {
    return [
        SELECT Id, Name, Descripcion__c, imagen_URL__c
        FROM Especies__c
    ];
  }
}
