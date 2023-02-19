//On recupère le document et on attend qu'il soit chargé:
$(document).ready(() => {
    //adresse de l'API
    const apiBaseUrl = "http://localhost:3000/"


    //creation d'une fonction pour afficher toutes les viandes:
    function getAllFromages() {
        console.log("test")
        //on fait l'appel d'Ajax
        $.ajax({
            //on precise le type de requete
            type: "GET",
            //on indique l'URL
            url: apiBaseUrl + "fromages",
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


    //creation d'une fonction pour ajouter des éléments dans le tableau fromages
    function createFromages() {
        //creation d'une constante pour recuperer le contenu des fromages, cibler l'id et cibler create aperitifs pour recuperer la valeur
        const fromagesName = { name: $("#name-fromages").val() };
        console.log("salut createFromages!")
        const data = {
            name: fromagesName,
        }
        //appel d'AJAX
        $.ajax({
            //on precise le type de requete
            type: "POST",
            //on pose l'URL
            url: apiBaseUrl + 'fromages',
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


    function getFromagesById() {
        const id = $("#id-fromages").val();
        const data = {
            id: id,
        }
        //appel d'AJAX
        console.log("Salut getFromagesById!")
        $.ajax({
            //preciser le type de requete
            type: "GET",
            //on pose l'URL
            url: apiBaseUrl + 'fromages/' + id,
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


    function updateFromagesById() {
        const id = $("#new-id-fromages").val();
        const fromagesName = { name: $("#new-name-fromages").val() };
        const data = {
            name: fromagesName,
            id: id
        }
        //appel d'AJAX
        $.ajax({
            //preciser le type de requete
            type: "PUT",
            //on pose l'URL
            url: apiBaseUrl + 'fromages/' + id,
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

    function deleteFromagesById() {
        const id = $("#id-delete-fromages").val();
        const data = {
            id: id
        }
        //appel d'AJAX
        $.ajax({
            //preciser le type de requete
            type: "DELETE",
            //on pose l'URL
            url: apiBaseUrl + 'fromages/' + id,
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
    $("#getAllFromages").click(getAllFromages);
    $("#add-fromages-button").click(createFromages);
    $("#get-fromages-by-id-button").click(getFromagesById);
    $("#update-fromages-button").click(updateFromagesById);
    $("#delete-fromages-by-id-button").click(deleteFromagesById)

}) 