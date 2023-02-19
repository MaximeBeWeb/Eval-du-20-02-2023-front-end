//On recupère le document et on attend qu'il soit chargé:
$(document).ready(() => {
    //adresse de l'API
    const apiBaseUrl = "http://localhost:3000/"


    //creation d'une fonction pour afficher toutes les viandes:
    function getAllViandes() {
        console.log("test")
        //on fait l'appel d'Ajax
        $.ajax({
            //on precise le type de requete
            type: "GET",
            //on indique l'URL
            url: apiBaseUrl + "viandes",
            //on indique le contenu attendu
            contentType: "application/json; charset=utf-8",
            //on indique le type de données
            dataType: "json",
            //si ça fonctionne:
            success: (result) => {
                //on affiche le console log
                console.log(result),
                    alert(result.message)
            },
            //si ça ne fonctionne pas:
            error: (xhr, status, error) => {
                console.log(xhr),
                    console.log(status),
                    console.log(error),
                    alert("status: " + status + "error:" + error)
            }
        })

    }


    //creation d'une fonction pour ajouter des éléments dans le tableau Viandes
    function createViandes() {
        //creation d'une constante pour recuperer le contenu des viandes, cibler l'id et cibler create aperitifs pour recuperer la valeur
        const viandesName = { name: $("#name-viandes").val() };
        console.log("salut createViandes!")
        const data = {
            name: viandesName,
        }
        //appel d'AJAX
        $.ajax({
            //on precise le type de requete
            type: "POST",
            //on pose l'URL
            url: apiBaseUrl + 'viandes',
            //on passe les données (JSON sous forme de string)
            data: JSON.stringify(data),
            //donner le contenu attendu
            contentType: 'application/json; charset=utf-8',
            //on indique le type de données
            dataType: 'json',
            //si ça marche:
            success: (result) => {
                console.log(result);
                alert(result.message)
            },
            //en cas d'erreur
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status:" + status + "error:" + error)
            }
        })
    }


    function getViandesById() {
        const id = $("#id-viandes").val();
        const data = {
            id: id,
        }
        //appel d'AJAX
        console.log("Salut getViandesById!")
        $.ajax({
            //preciser le type de requete
            type: "GET",
            //on pose l'URL
            url: apiBaseUrl + 'viandes/' + id,
            //on passe les données (JSON sous forme de string)
            data: JSON.stringify(data),
            //donner le contenu attendu
            contentType: 'application/json; charset=utf-8',
            //on indique le type de données
            dataType: 'json',
            //si ça marche:
            success: (result) => {
                console.log(result);
                alert(result.message)
            },
            //en cas d'erreur
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status:" + status + "error:" + error)
            }
        })
    }


    function updateViandesById() {
        const id = $("#new-id-viandes").val();
        const viandesName = { name: $("#new-name-viandes").val() };
        const data = {
            name: viandesName,
            id: id
        }
        //appel d'AJAX
        $.ajax({
            //preciser le type de requete
            type: "PUT",
            //on pose l'URL
            url: apiBaseUrl + 'viandes/' + id,
            //on passe les données (JSON sous forme de string)
            data: JSON.stringify(data),
            //donner le contenu attendu
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            //on indique le type de données
            dataType: 'json',
            //si ça marche:
            success: (result) => {
                console.log(result);
                alert(result.message)
            },
            //en cas d'erreur
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status:" + status + "error:" + error)
            }
        })
    }

    function deleteViandesById() {
        const id = $("#id-delete-viandes").val();
        const data = {
            id: id
        }
        //appel d'AJAX
        $.ajax({
            //preciser le type de requete
            type: "DELETE",
            //on pose l'URL
            url: apiBaseUrl + 'viandes/' + id,
            //donner le contenu attendu
            contentType: 'application/json; charset=utf-8',
            //on indique le type de données
            dataType: 'json',
            data: JSON.stringify(data),
            //si ça marche:
            success: (result) => {
                console.log(result);
                alert(result.message)
            },
            //en cas d'erreur
            error: (xhr, status, error) => {
                console.log(xhr);
                console.log(status);
                console.log(error);
                alert("status:" + status + "error:" + error)
            }
        })
    }




    //rajouter un Event Listener sur un bouton dédié
    // On cible le Create-Button et au moment du click on cible CreateAperitifs
    $("#getAllViandes").click(getAllViandes);
    $("#add-viandes-button").click(createViandes);
    $("#get-viandes-by-id-button").click(getViandesById);
    $("#update-viandes-button").click(updateViandesById);
    $("#delete-viandes-by-id-button").click(deleteViandesById)

}) 