# Backbone.js-project

The web application, developed using Backbone.js and other libraries — allowing for efficient task management and blog organization.

Backbone.js je framework koji omogućava strukturiranje JavaScript koda po konceptu MVC što je skraćeno od “model-view-control”. Kreator ovog framework-a je Jeremy Ashkenas. 

Backbone se primenjuje u aplikacijama kao što su: LinkedIn Mobile, Twitter, FourSquare, Pandora, Soundcloud i još mnogim drugim.

Ova biblioteka omogućava organizaciju koda na uredan i efikasan način, što je naročito od velike važnosti za kodove pisane u programskom jeziku JQuery, koji je sam po sebi nepregledan i neuredan.


Web aplikacija je podeljena na tri celine: početna (home) stranica, aplikacija Todos i aplikacija Bloglist. U njenom kreiranju korišćeno je: HTML, CSS, Backbone, Bootstrape i Underscore biblioteke. Na svakoj stranici nalazi se meni pomoću koga je mogući prelazak sa jedne stranice na drugu. 

Home stranica - Osnovni i najjednostavniji deo Web aplikacije. Predstavlja mesto koje okuplja sve celine aplikacije, a osim toga, nema drugu funkcionalnost. U meniju na vrhu strane se nalaze putanje do aplikacija Todos i Bloglist, kao i logo.

Todos - Ova celina Web aplikacije ima za svrhu podsećanje korisnika aplikacije o njegovim obavezama. Omogućava korisniku da unosi obaveze, čekira ih da su gotove, filtrira gotove, kao i da ih briše. 

Prvi korak predstavlja upisivanje obaveze u textbox. U aplikaciji sa leve strane postoje checkbox-ovi kojima obeležavamo ispunjenje određene obaveze, gde se one nakon obeležavanja filtriraju po kategorijama: All, Active i Completed. Prelaskom miša preko obaveze se sa desne strane pojavljuje znak x čijim pritiskom brišemo određenu obavezu.

Bloglist - Relativno jednostavna aplikacija koja se koristi za grupisanje blogova u odgovarajući spisak blogova. Funkcionalnosti kojima raspolaže obuhvataju: ubacivanje, menjanje (editovanje) i brisanje blogova sa stranice. 

Ukoliko želimo da dodamo novi blog, to vršimo pritiskom na dugme Add nakon popunjavanja polja Author Title i URL. Postupak se može ponoviti neograničen broj puta. Moguća je izmena sadržaja prethodno unetih podataka. Nakon izvršenih promena i potvrđivanja istih spisak se ažurira sa novim podacima. Blog sa spiska se takođe može i obrisati pritiskom na Delete.

Backbone je deo Todos i Bloglist aplikacija i omogućava im da dinamički rade.

Zaključak: 
Backbone je više biblioteka nego framework koja pruža mogućnost pravljenja bogatijih web aplikacija. Podrazumeva korišćenje komponenti i njegovih predefinisanih metodi i svojstava. 
Može se koristiti kao osnova za pravljenje sopstvenog framework-a, pa su tako primeri framwork-a koji su zasnovani na Backbone-u Aura, Geppetto, Marionette, Thorax, Chaplin.

Njegovi glavni konkurenti su Angular i Ember. Backbone ima manju zajednicu jer je nastao nešto kasnije u odnosu na svoje konkurente, a njegova prednost je veličina za preuzimanje, koja je kompresovana i minimizirana, i iznosi 6,4K.

Pogodan je za pravljenje prilagodljivih i brzih aplikacija, ima praktični radni okvir, jer ne koristi puno šablona, pa samim tim programeru daje slobodu. Kreator ovog framework-a, Jeremy Ashkenas je rekao: “Ako pišete puno šablona u Backbone-u, onda ga ne koristite kako treba“.

Detaljna dokumentacija: [Backbone.js.docx](https://github.com/nminic/Backbone.js-project/files/9901856/Backbone.js.docx)

_____________________________________________________________


Backbone.js is a framework that structures JavaScript code using the MVC concept, which stands for "model-view-controller." The creator of this framework is Jeremy Ashkenas.

Backbone is used in applications such as LinkedIn Mobile, Twitter, FourSquare, Pandora, Soundcloud, and many others.

This library enables the organization of code in a neat and efficient manner, which is particularly important for code written in jQuery, a language that is inherently messy and unorganized.

The web application is divided into three main sections: the home page, the Todos application, and the Bloglist application. It was created using HTML, CSS, Backbone, Bootstrap, and Underscore libraries. Each page features a menu that facilitates navigation between pages.

Home page - The simplest and most basic part of the web application. It serves as a hub that gathers all sections of the application and has no other functionality. In the menu at the top of the page, there are links to the Todos and Bloglist applications, as well as a logo.

Todos - This part of the web application is designed to remind users of their tasks. It allows users to enter tasks, check them off as completed, filter tasks, and delete them.

The first step involves entering a task in a textbox. In the application, checkboxes on the left side mark the completion of tasks, which are then filtered into categories: All, Active, and Completed. Hovering over a task displays an 'x' on the right side, which can be clicked to delete the task.

Bloglist - A relatively simple application used for organizing blogs into an appropriate list. Its functionalities include adding, editing, and deleting blogs from the list.

To add a new blog, click the 'Add' button after filling in the Author, Title, and URL fields. This process can be repeated an unlimited number of times. Content of previously entered data can be modified, and after confirming the changes, the list updates with the new information. A blog can also be removed from the list by pressing the 'Delete' button.

Backbone is part of the Todos and Bloglist applications and enables them to function dynamically.

Conclusion: Backbone is more of a library than a framework that offers the possibility of creating richer web applications. It involves using components and predefined methods and properties. It can serve as a foundation for creating one's own framework, and examples of frameworks based on Backbone include Aura, Geppetto, Marionette, Thorax, and Chaplin.

Its main competitors are Angular and Ember. Backbone has a smaller community because it emerged later compared to its competitors, but its advantage is the small download size, which is compressed and minimized, and amounts to 6.4K.

It is suitable for creating adaptable and fast applications and provides a practical framework, as it does not use many templates, thus giving developers more freedom. Jeremy Ashkenas, the creator of this framework, has said, "If you're writing a lot of templates in Backbone, you're not using it properly."

Detailed documentation: [Backbone.js.docx](https://github.com/nminic/Backbone.js-project/files/9901856/Backbone.js.docx)


