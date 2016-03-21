$(document).ready( function() {
    //inhoud modale vensters
    var aerox1Inhoud = $('#aerox1').detach();
    var aerox2Inhoud = $('#aerox2').detach();
    var aerox3Inhoud = $('#aerox3').detach();
    
    //events bij de thumbs : modaal venster openen met de passende inhoud erin
    $('#aerox1thumb').on('click',function() {
        modaalVenObject.openen({inhoud: aerox1Inhoud, breedte: 600});
    });
    $('#aerox2thumb').on('click',function() {
        modaalVenObject.openen({inhoud: aerox2Inhoud, breedte: 550});
    });
    $('#aerox3thumb').on('click',function() {
        modaalVenObject.openen({inhoud: aerox3Inhoud, breedte: 500});
    });
    
});