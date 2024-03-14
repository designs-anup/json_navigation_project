var menuItems = [
    {
      "name" : "Home",
      "url" : "#",
      "submenu" : []
    },
    {
      "name" : "About",
      "url" : "#",
      "submenu" : [
        {
            "name" : "Mission",
            "url" : "#"
          },
          {
            "name" : "Vision",
            "url" : "#"
          }
      ]
    },
    {
      "name" : "Services",
      "url" : "#",
      "submenu" : [
        {
          "name" : "Graphic Design",
          "url" : "#"
        },
        {
          "name" : "Web Design",
          "url" : "#"
        },
        {
          "name" : "Poster Design",
          "url" : "#"
        },
        {
          "name" : "Digital Marketing",
          "url" : "#"
        }
      ]
    },
    {
      "name" : "Contact",
      "url" : "#",
      "submenu" : []
    }
  ];
  
  
  let menuList = "<ul>";
  
  for(i=0; i < menuItems.length; i++){
      // console.log(menuItems[i]);
      menuList += "<li>"
      menuList += "<a href="+ menuItems[i].url +">"
      menuList += menuItems[i].name;
      menuList += "</a>"
      
      if(menuItems[i].submenu.length > 0){
          menuList += "<ul>";
          for(j=0; j < menuItems[i].submenu.length; j++){
              // console.log(menuItems[i].submenu[j].name);
              menuList += "<li>"
              menuList += "<a href="+ menuItems[i].submenu[j].url +">";
              menuList += menuItems[i].submenu[j].name;
              menuList += "</a>";
              menuList += "</li>"
          }
          menuList += "</ul>";
      }
      
      menuList += "</li>"
  }
  
  menuList += "</ul>";
  
  // debugger;
  document.getElementById("mainNav").innerHTML = menuList;