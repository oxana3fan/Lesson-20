class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); 
    }

    setStatus(status) {
        document.getElementById("status").innerHTML = "You clicked " + status + " button";
    }

    onClick(event) {
      let status = event.target.id;
      if (status) {
        this.setStatus(status);
        console.log("Capturing " + status + " " + event.target.tagName);
      }
    };
  }

  new Menu(menu);