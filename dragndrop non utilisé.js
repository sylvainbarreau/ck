    // Votre tableau de valeurs JavaScript
    var allValues = ['Guerre', 'PerteTerres', 'Controle', 'VassalAInfluencer', 'VassalHamecon', 'EtrangerAInfluencer', 'EtrangerHamecon', 'DeclarationGuerre', 'DeclarationGuerreSurvie', 'Chevalier', 'Revenu'];
    
    // Fonctions pour le glisser-déposer
    function allowDrop(ev) {
        ev.preventDefault();
      }
  
      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
  
     
      
    // Cette fonction crée des éléments draggable pour chaque valeur du tableau
    function populateDraggableItems() {
      var draggableItems = document.getElementById('draggableItems');

      allValues.forEach(function(value) {
        var draggableElement = createDraggableElement(value);
        draggableItems.appendChild(draggableElement);
      });
    }

    function createDraggableElement(value) {
      var draggableElement = document.createElement('div');
      draggableElement.className = 'draggable-item';
      draggableElement.setAttribute('draggable', true);
      draggableElement.id = value;
      draggableElement.innerHTML = value;
      draggableElement.setAttribute('ondragstart', 'drag(event)');
      return draggableElement;
    }

    // ... Reste de votre code JavaScript pour le glisser-déposer ...

    function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      var draggedElement = document.getElementById(data);
      //var dropItems = document.getElementById('dropItems');
      // Récupère une référence à l'élément sur lequel l'élément glissé a été lâché
      const dropItems = ev.target;
      console.log(dropItems.id);
      var droppedItem = createDroppedItem(draggedElement.innerHTML);
      dropItems.appendChild(droppedItem);
      draggedElement.remove(); // Supprime l'élément d'origine
    }

    function createDroppedItem(value) {
      var droppedItem = document.createElement('div');
      droppedItem.className = 'dropped-item';
      droppedItem.innerHTML = value;
      droppedItem.setAttribute('draggable', true); // Rend l'élément déplaçable
      droppedItem.setAttribute('ondragstart', 'drag(event)');
      return droppedItem;
    }

    // Appel pour peupler la zone draggable avec les valeurs initiales
    populateDraggableItems();