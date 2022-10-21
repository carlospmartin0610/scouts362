var url=location.href;
$(document).ready(function(){
let slideIndex = 0;
console.log(url);
//Transicion del carrusel
if(url.substring(url.length-13, url.length)=="scouts362.es/" || url.substring(url.length-10, url.length)=="index.html" || url.substring(url.length-11, url.length)=="index.html#"){
  slideIndex=0;
  showSlides();
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  console.log(slideIndex);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dotactive", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " dotactive";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


//Informacion de cada seccion
if (
  url.substring(url.length - 14, url.length) == "secciones.html" ||
  url.substring(url.length - 15, url.length) == "secciones.html#" ||
  url.substring(url.length - 15, url.length) == "secciones.html#info1" ||
  url.substring(url.length - 15, url.length) == "secciones.html#info2"
) {
  $(".castores,.manada,.tropa,.esculta,.clan,.scouters").css(
    "cursor",
    "pointer"
  );
  $(".info1").hide();
  $(".info2").hide();

  $(".castores").click(function () {
    $(".info2").hide();
    $(".info1 h3").html("CASTORES");
    $(".info1 h3").css("color", "rgb(59, 170, 207)");
    $(".info1 p").html(
      "En la etapa de 6 a 8 años el grupo se organiza en “colonias” donde aprenden a vivir en grupo y a participar en las actividades junto a sus iguales, todo bajo el lema “COMPARTIR” que fomenta la igualdad y la solidaridad entre el grupo. Con juegos y canciones van desarrollando rutinas y haciéndose responsables de sus acciones desarrollando su imaginación de forma lúdica y educativa en diferentes áreas y responsabilidades." +
        "<br><br>En esta edad es fundamental que vayan adquiriendo dichas responsabilidades, tanto personales como colectivas. Desde la adquisición de hábitos de higiene corporal, hasta los conceptos de que “cada cosa tiene su lugar” o que el grupo entero debe implicarse en ayudar a recoger después de la actividad." +
        "<br><br>En la edad de la Colonia, están en la edad de la máxima ilusión por descubrirlo todo, es la primera vez que salen de casa y comienzan a acercarse a los demás. Contemplan con curiosidad haciéndose personas cada vez más autónomas, capaces de resolver situaciones y adquiriendo capacidades que les acompañarán el resto de su vida." +
        "<br><br>En las excursiones, campamentos y visitas educativas se consigue que cada participante vaya descubriendo el mundo que lo rodea, compartiendo esas experiencias no solo con las personas adultas sino con quienes tienen su misma edad, y desarrollando interés temprano en áreas que le gustan."
    );
    $(".info1").show();
    $("html").animate(
      {
        scrollTop: $(".info1").offset().top,
      },
      800 //speed
    );
  });

  $(".manada").click(function () {
    $(".info2").hide();
    $(".info1 h3").html("MANADA");
    $(".info1 h3").css("color", "yellow");
    $(".info1 p").html(
      "Después de su primer contacto en la Colonia y al cumplir los 8 años, entran a formar parte de la Manada de Lobatos." +
        "<br><br>Su marco simbólico es el Libro de la Selva, o mejor dicho el Libro de las Tierras Vírgenes a través del cual se convierten en Lobatos. Su imaginación está al servicio de una incesante actividad y del juego, su medio de aprender." +
        "<br><br>Su compromiso es “Haremos lo mejor”. De nuevo es el desarrollo de la imaginación es la que permite a la figura adulta y modelo educativo a hablar un lenguaje accesible para la edad con la que nos encontramos. En esta etapa, niñas y niños aprenden a convivir en pequeños grupos de seis, llamados “seisenas”, en las que se reparten responsabilidades y aprenden a trabajar en unión, desplegando sus hábitos sociales y responsabilizándose de su tarea. Es a través del juego como van adquiriendo también sus propios valores personales que le acompañarán toda su vida. A través de talleres se inician en destrezas y habilidades, y a través de excursiones y campamentos, a desenvolverse con autonomía de forma progresiva." +
        "<br><br>La Manada de Lobatos parte con la ilusión de crecer con salud, fuertes, capaces de superarse y con ganas de descubrir el mundo."
    );
    $(".info1").show();
    $("html").animate(
      {
        scrollTop: $(".info1").offset().top,
      },
      800 //speed
    );
  });

  $(".tropa").click(function () {
    $(".info2").hide();
    $(".info1 h3").html("TROPA");
    $(".info1 h3").css("color", "green");
    $(".info1 p").html(
      "Al alcanzar los 11 años llega el momento de entrar a formar parte de la Tropa." +
        "<br><br>Es el tiempo de la afirmación de la personalidad; el deseo de aventura se hace más patente, se desarrolla el carácter, las actitudes y la capacidad de vivir en grupo, enriqueciéndose personalmente." +
        "<br><br>En esta sección se trabaja en Patrullas, donde se potencia el compromiso personal. Eligen sus propios/as guías y se responsabilizan con su respectivo cargo de patrulla. La Tropa adquiere así sus propias responsabilidades y aprenden a valorar el trabajo en equipo." +
        "<br><br>La imaginación deja paso a la sed de aventuras. El contacto directo con la naturaleza y las destrezas para desenvolverse en el medio natural les permiten ir más allá en la formación de sí mismos y de su personalidad." +
        "<br><br>Aprenden a tomar decisiones por determinación propia y colectivamente. Hacen sus actividades en contacto con la Naturaleza y comienzan a tomar conciencia del servicio al resto de personas. Aspiran a estar “Siempre listos”."
    );
    $(".info1").show();
    $("html").animate(
      {
        scrollTop: $(".info1").offset().top,
      },
      800 //speed
    );
  });

  $(".esculta").click(function () {
    $(".info1").hide();
    $(".info2 h3").html("ESCULTA");
    $(".info2 h3").css("color", "brown");
    $(".info2 p").html(
      "Cumplidos los 14 años, los chicos y chicas comienzan a trabajar en la Unidad Esculta." +
        "<br><br>Se trata de un momento fundamental para las ideas, los interrogantes y las ambiciones y en definitiva para su futuro. Empiezan en esta etapa cómo adolescentes a perfilar su personalidad definitiva." +
        "<br><br>La vida en grupo cobra enorme protagonismo y proactividad y muchas veces no aceptan el ocio pasivo y dirigido que se les puede ofertar a estas edades." +
        "<br><br>Elaboran sus propios proyectos, abiertos al servicio comunitario, se abren a la sociedad y afianzan su pertenencia y su responsabilidad ciudadana." +
        "<br><br>Conciben la “Empresa o Proyecto” desde la idea hasta la ejecución, con la mera supervisión de la figura adulta educativa. Se responsabilizan de sus acciones y se impulsan en su propia motivación." +
        "<br><br>Empiezan a plantearse su formación profesional y a fijarse retos." +
        "<br><br>Se hacen conscientes de que los estudios son lo más importante de sus vidas en este momento, sin dejar de lado también sus aspiraciones sociales y sus ganas de divertirse de forma saludable." +
        "<br><br>El cuidado de la salud cobra una gran importancia en esta etapa para convertirse en una persona adulta sana."
    );
    $(".info2").show();
    $("html").animate(
      {
        scrollTop: $(".info2").offset().top,
      },
      800 //speed
    );
  });

  $(".clan").click(function () {
    $(".info1").hide();
    $(".info2 h3").html("CLAN");
    $(".info2 h3").css("color", "red");
    $(".info2 p").html(
      "La última etapa de la Educación Scout es el Clan Rover, formado por jóvenes a partir de 17 años." +
        "<br><br>Ser Rover es vivir intensamente cada paso, tomar las riendas y hacer un proyecto de su propia vida, empeñarse en cambiar el mundo y, sobre todo, creer que es posible." +
        "<br><br>Se comprometen colectiva e individualmente en acciones de cambio y se esfuerzan por crecer al tiempo como persona. Elaboran sus propios proyectos personales, se marcan metas y se ayudan mutuamente a madurar y crecer como personas adultas comprometidas." +
        "<br><br>Colectivamente, se esfuerzan por hacer suya la máxima scout de “tratar de dejar el mundo en mejores condiciones de cómo lo encontramos”. Son jóvenes que se comprometen a nivel social, dinamizan, conciencian y ayudan a todo el grupo con la esperanza de cambiar el mundo."
    );
    $(".info2").show();
    $("html").animate(
      {
        scrollTop: $(".info2").offset().top,
      },
      800 //speed
    );
  });

  $(".scouters").click(function () {
    $(".info1").hide();
    $(".info2 h3").html("SCOUTERS");
    $(".info2 h3").css("color", "blue");
    $(".info2 p").html(
      "Nunca es tarde para pertenecer a un Grupo Scout." +
        "<br><br>En todas las secciones se cuenta con personas voluntarias, monitoras y monitores de Tiempo Libre, referentes educativos, personal médico, personal de cocina… Si quieres compartir tu tiempo y experiencia en un Grupo Scout ponte en contacto con nosotros!" +
        "<br><br>Te ofrecemos la posibilidad de entrar en un grupo y colaborar con las actividades y campañas que se realizan durante el año, así como en las acamapadas de fines de semana y los campamentos de primavera y verano."
    );
    $(".info2").show();
    $("html").animate(
      {
        scrollTop: $(".info2").offset().top,
      },
      800 //speed
    );
  });
}


if(url.substring(url.length-14, url.length)=="reuniones.html" || url.substring(url.length-15, url.length)=="reuniones.html#"){
  
  $(".dropdown-content").hide();

  $("#drop1").click(function(){
    $("#myDropdown1").toggle();
    $("#myDropdown1").css("border-top","2px solid red");
  });
  $("#drop2").click(function(){
    $("#myDropdown2").toggle();
    $("#myDropdown2").css("border-top","2px solid red");
  });
  $("#drop3").click(function(){
    $("#myDropdown3").toggle();
    $("#myDropdown3").css("border-top","2px solid red");
  });

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content')) {
      $(".dropdown-content").hide();
    }
  }
}
});