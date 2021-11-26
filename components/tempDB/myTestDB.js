const products = {
  chaise: {
    products: [
      {
        id: 1,
        src: 'https://cdn.nvgallery.com/static/images/CCHAWAYGBTA009_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'WAYNE',
        text: "Avec ses lignes fines, WAYNE s'harmonisera facilement à votre déco.",
        bigText1:
          "On adore cette chaise au design super tendance ! Avec ses lignes fines, WAYNE s'harmonisera facilement à votre déco. Le design de cette chaise de table se révèle extrêmement confortable et fonctionnel. L'assise et le dossier de cette chaise moderne sont recouverts d'un très beau velours.WAYNE est disponible dans plusieurs coloris.",
        bigText2:
          "WAYNE repose sur des pieds en métal doré - acier inoxydable façon laiton - qui contrastent parfaitement avec la chaleur du velours. A la fois chic et confortable, cette chaise de salle à manger ou de salon apportera la touche élégante et subtile indispensable à votre décoration d'intérieur. Autour d'une table ou près d'un bureau, cette chaise en velours apportera de l'élégance et un effet design à votre maison.",
        price: 229,
        rating: 4,
        totalVote: 20,
        stock: 15,
        otherSrc: [
          ' https://cdn.nvgallery.com/static/images/CCHAWAYGBTA009_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/CCHAWAYGBTA009_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 2,
        src: 'https://cdn.nvgallery.com/static/images/609a4f71cce88749373851.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'EERO',
        text: 'Des chaises accueillantes, mêlant noblesse des matières et technicité impeccable.',
        bigText1:
          "La collection EERO fusionne les inspirations fortes du moment pour un rendu aux airs très bold minimalist. Des chaises accueillantes, mêlant noblesse des matières et technicité impeccable. Elles sont à envisager comme de vraies pièces design pour l'intérieur. Osez la subtilité du dépareillé autour de votre table à manger grâce à la variété de coloris de ses assises.",
        bigText2:
          "L'assise en velours doux marron chocolat et le dossier en bois de noyer veiné sont légèrement courbés afin d'offrir un enveloppement idéal. Sa structure est en métal noir finition mate et son dossier en bois de noyer veiné. On adore l'association et le contraste de ces matières participant à créer un look unique et une véritable pièce design pour la maison.",
        price: 169,
        rating: 3,
        totalVote: 30,
        stock: 6,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/609a4f75d8526029661701.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/609a4f7bb162f684917621.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 3,
        src: 'https://cdn.nvgallery.com/static/images/5ff860ccdf12f584461496.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'LUTHOR',
        text: "Idéale pour habiller votre table à manger, n'hésitez pas à jouer sur une belle mise en valeur en exposant LUTHOR dans le coin salon !",
        bigText1:
          "Notre chaise LUTHOR s'inspire du fauteuil pour amener dans votre espace salon-salle à manger un air aux accents épuré et arty pop. Idéale pour habiller votre table à manger, n'hésitez pas à jouer sur une belle mise en valeur en exposant LUTHOR dans le coin salon !",
        bigText2:
          "Cette chaise au velours doux offre un suffisant confort - se composant d'une assise généreusement rembourrée et stable portée par 4 solides pieds en métal noir mat. Son dossier de forme arrondie et ajouré pour un rendu joliment retro, épouse la forme du dos et se ponctue par 2 accoudoirs pour un peu plus de détente. Pour le détail raffiné, un passepoil remplace les coutures pour de jolies finitions.",
        price: 249,
        rating: 5,
        totalVote: 14,
        stock: 16,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5ff860d06e6d5770174401.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5ff860d83b79b815484952.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 4,
        src: 'https://cdn.nvgallery.com/static/images/603f6ea6b3681383085889.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'BANE',
        text: 'Un style qui se veut tout sauf compliqué, en étant fonctionnel, confortable et chic.',
        bigText1:
          "La collection BANE a été conçue dans l'esprit Mid-Century, incontournable aujourd'hui en matière de design. La volonté de cette tendance ? Un style qui se veut tout sauf compliqué, en étant fonctionnel, confortable et chic.",
        bigText2:
          "Les chaises et tabourets de bar BANE avec leurs lignes épurées allègent l'espace visuel de la pièce tout en proposant un réel confort. Le dossier et l'assise disposent d'une épaisseur ferme et agréable tout en velours ou tissu texturé, reposant sur un piètement en métal noir mat ou doré super robuste. *La version tabouret de bar de BANE est agrémentée d'un repose pieds tout doré pour la touche chic et détente.",
        price: 199,
        rating: 4,
        totalVote: 32,
        stock: 22,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/603f6ea6a6a73196970115.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/603f6ea84d523490107613.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 5,
        src: 'https://cdn.nvgallery.com/static/images/6076c17334aca571467848.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'CERSEI',
        text: 'Envie de donner une dimension sophistiquée à votre intérieur ? Inspirant élégance et intemporalité.',
        bigText1:
          "Envie de donner une dimension sophistiquée à votre intérieur ? Inspirant élégance et intemporalité, ce petit meuble d'appoint se pare d'une teinte terracotta - pantone 16-1328 TCX - et se fond parfaitement dans le décor en apportant un aspect raffiné.",
        bigText2:
          'Conçue comme une table auxiliaire, on peut conférer à CERSEI plusieurs fonctions selon ses besoins et envies. Sa conception résistante permet par exemple de facilement la convertir en tabouret. CERSEÏ est constitué de métal peint à la chaux - une peinture saine, sans composés organiques volatils, et ayant la particularité de mieux vieillir. Chaque table CERSEÏ est unique.',
        price: 229,
        rating: 4,
        totalVote: 96,
        stock: 8,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/6076c17495801807271835.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/6076c1732b846237552040.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 6,
        src: 'https://cdn.nvgallery.com/static/images/60995b76923fe181639768.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'UBERTO',
        text: "D'inspiration vintage, la chaise UBERTO sous ses airs naturellement raffiné et tendance propose une allure hautement design.",
        bigText1:
          "D'inspiration vintage, la chaise UBERTO sous ses airs naturellement raffiné et tendance propose une allure hautement design. Véritable intemporel, elle trouvera facilement sa place dans le bureau, la chambre, autour d'une table à manger,  ou comme assise d'appoint dans votre espace salon.",
        bigText2:
          "La structure tubulaire design de la chaise UBERTO est réalisée en acier chromé inoxydable, à la finition polie. L'assise et le dossier se compose d'une mousse de haute qualité recouverte d'un tissu blanc bouclette très cosy pour un résultat global complètement dans l'air du temps.",
        price: 249,
        rating: 4,
        totalVote: 15,
        stock: 18,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/60995b738ddba954409584.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/60995b78800dc839483399.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 7,
        src: 'https://cdn.nvgallery.com/static/images/609933302fb21731904474.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'BROOKES',
        text: 'Exit le fauteuil de bureau au look suranné et impersonnel !',
        bigText1:
          "Exit le fauteuil de bureau au look suranné et impersonnel ! Avec BROOKES, on ne cherche plus à cacher son espace de travail, on l'assume. Cette chaise rotative est idéale pour que votre Home office profite de conditions optimales. Parfaite autant pour les grands que les plus petits espaces, BROOKES est pratique, il suffira de la faire pivoter pour qu'elle trône en fauteuil cosy dans votre salon.",
        bigText2:
          'En velours doux terra di mattone, la chaise de bureau BROOKES offre un confort suffisant autant pour travailler que pour se délasser : mousse haute densité, garantie sans rembourrage de plumes (!), 30kg/m3. Son assise est idéalement enveloppante, avec un dossier encadrant le dos et des accoudoirs permettant de reposer les muscles et le haut du corps. Son piètement quadripode en métal noir rotatif et ses pieds patins ancrés au sol assurent un travail de précisions et une bonne stabilité.',
        price: 349,
        rating: 4,
        totalVote: 25,
        stock: 21,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/6099333261178367422668.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/6099333292817609445693.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 8,
        src: 'https://cdn.nvgallery.com/static/images/BFAUKINGBYW027_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'KINGSCROSS',
        text: 'Notre fauteuil tire directement son inspiration de ce quartier devenu « the place to be » ces dernières saisons.',
        bigText1:
          "Notre fauteuil tire directement son inspiration de ce quartier devenu « the place to be » ces dernières saisons. Lieu mélangeant avec grâce les tendances, le vintage, et la détente. Le défi pour notre fauteuil a été d'allier un esthétisme fort à la praticité, ne pas sacrifier le confort pour le style. Une jolie pièce où il fait bon de se lover !",
        bigText2:
          "Très enveloppant, KINGSCROSS dispose d'un rembourrage parcourant assise, accoudoirs, et dossiers - rehaussé par un bel effet capitonné. Ce fauteuil de bureau déplie un choix de teintes et de matières aussi douces et que cosy : tissus texturés, velours et bouclette. Il repose sur une solide base en métal noir ou doré, au charme très retro.",
        price: 299,
        rating: 3,
        totalVote: 8,
        stock: 1,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/BFAUKINGBYW027_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/BFAUKINGBYW027_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 9,
        src: 'https://cdn.nvgallery.com/static/images/5ff60b8b312fe206184964.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'SAVAGE',
        text: 'Notre fauteuil intemporelles et avant-gardistes considérées comme un véritable objet décoratif .',
        bigText1:
          "Simple, efficace, et élégante. Les lignes de la chaise SAVAGE s'inspirent du design retro cher à NV GALLERY : assise type « coque » et piètement fuselé. Notre chaise SAVAGE est associée - dans l'univers du design - à cette catégorie d'assises intemporelles et avant-gardistes considérées comme un véritable objet décoratif en plus d'être un atout « confort ».",
        bigText2:
          "La chaise SAVAGE offre un confort suffisant avec une assise composé d'un velours côtelé - densité : 28-35 kg/m3. Elle est portée par 4 solides pieds en métal inoxydable noir mat pour un rendu final très élégant. Son dossier de forme arrondie - conçu sur le principe emblématique de la « coque » épouse joliment la forme du dos.",
        price: 299,
        rating: 5,
        totalVote: 28,
        stock: 11,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5ff60b8f5fda8918934663.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5ff60bbd7ab12095547369.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 10,
        src: 'https://cdn.nvgallery.com/static/images/60a4d633cf46b132523092.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'HORACE',
        text: "Belle et confort sous tous les angles, la chaise HORACE revisite pour l'intérieur de la maison l'esthétique retro italienne des années 60's.",
        bigText1:
          "Belle et confort sous tous les angles, la chaise HORACE revisite pour l'intérieur de la maison l'esthétique retro italienne des années 60's. Véritable objet design se déclinant sous plusieurs coloris et matières, vous apprécierez HORACE autant proche de votre bureau, qu'autour de votre table à manger.",
        bigText2:
          "La chaise HORACE a été dessinée pour allier design et confort pour la quotidien - de profil on adore la vision aérienne qu'offre son dossier simplement soutenu par ses accoudoirs. HORACE ose également une belle association de matières avec une assise haute densité légèrement capitonnée en velours marron chocolat, des accoudoirs en bois, et le tout reposant sur une solide base en métal noir mat. Des lignes encadrantes et épurées promettant un rendu élégamment atypique pour la maison.",
        price: 249,
        rating: 4,
        totalVote: 16,
        stock: 7,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/60a4d639391bc762860741.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/60a4d63a9254f223560054.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 11,
        src: 'https://cdn.nvgallery.com/static/images/5ffc87fb75951236511807.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'VANDAL',
        text: 'Inspirée vintage, la chaise VANDAL a été interprétée dans un esprit minimaliste et travaillée de façon durable et responsable.',
        bigText1:
          "Inspirée vintage, la chaise VANDAL a été interprétée dans un esprit minimaliste et travaillée de façon durable et responsable. Son design reprend le principe de la sculpture du meuble des années 50, mais pensé de façon assez confortable pour l'univers du design : formes arrondies et enveloppantes.",
        bigText2:
          "La chaise VANDAL avec sa base typique en métal inoxydable a été réfléchie et dessinée pour garantir une stabilité et une robustesse à toute épreuve. Son assise composée d'une matelassure généreuse et son dossier travaillé pour accompagner délicatement la forme de votre dos, offrent un super confort pour les moments de détente.",
        price: 299,
        rating: 5,
        totalVote: 6,
        stock: 72,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5ffc87fece287338156093.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5ffc880381706065646164.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 12,
        src: 'https://cdn.nvgallery.com/static/images/5ffc2962d2b2d838720034.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'SAGE',
        text: "Moderne, retro, électrique, design, ou baroque ? Facile de parfaire le style d'une pièce avec la chaise SAGE !",
        bigText1:
          "Avec sa silhouette toute en rondeur, cette chaise design dégage un petit air propre au design des années 60, tout en apportant une tonalité contemporaine grâce à son choix de tissus. Conseil : Si vous utilisez SAGE dans votre espace salle à manger, elle se plaira autour d'une table ronde.",
        bigText2:
          'Le dossier joliment courbé de la chaise SAGE inspire son style retro et apporte un confort idéal pour le dos. Son assise généreusement rembourrée repose sur 4 solides pieds stables en métal noir mat pour un maximum de confort.',
        price: 249,
        rating: 5,
        totalVote: 9,
        stock: 7,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5ffc2962cbe72614180804.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5ffc29643d646099454495.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      }
    ]
  },
  canape: {
    products: [
      {
        id: 1,
        src: 'https://cdn.nvgallery.com/static/images/6035397538a9d420225318.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'GIULIA',
        text: 'On rêve de se lover dans le canapé 2 places GIULIA !',
        bigText1:
          "On rêve de se lover dans le canapé 2 places GIULIA ! Nos designers ont ré-interprété le design 70's pour vous apporter un véritable confort enveloppant douillet et cosy.",
        bigText2:
          "Sous sa forme arrondie et organique, le design du canapé 2 places GIULIA se veut proche du sol et séduit par ses proportions généreuses - profondeur d'assise : 142x53 cm. Son dossier et son assise sont en mousse haute densité - garantie sans rembourrage de plumes (!) - pour offrir un confort moelleux et relaxant. Il est habillé d'un tissu texturé désert taupe - densité 264g/m2.",
        price: 1199,
        rating: 5,
        totalVote: 22,
        stock: 4,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/60353972b1050348277784.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/60353979234d3161935449.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 2,
        src: 'https://cdn.nvgallery.com/static/images/3SSOMYWHBK001_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'OMNYA',
        text: 'Véritable élément décoratif par excellence, le canapé retro OMNYA se distingue avant tout par sa forme.',
        bigText1:
          'Véritable élément décoratif par excellence, le canapé retro OMNYA se distingue avant tout par sa forme, des lignes courbes et un design arrondi très enveloppant. Notre collection s’adapte à votre intérieur en proposant des modèles allant du classique canapé 2 ou 3 places à la méridienne super cosy.',
        bigText2:
          "Chacune de ces pièces a été conçue avec un solide piètement en métal noir, et son assise d’une haute densité - 32g/cm3 - se déplie sous des tissus doux, chic et cosy : tissus bouclette très tendance et teintes reposantes. On adore la collection OMNYA dédiée au salon pour son design et ses finitions travaillées - Les coussins du dossier, les accoudoirs, et l'assise sont déhoussables.",
        price: 1699,
        rating: 3,
        totalVote: 35,
        stock: 14,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/3SSOMYWHBK001_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/3SSOMYWHBK001_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 3,
        src: 'https://cdn.nvgallery.com/static/images/5ef0ed57c95f5916843323.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'AUSTER',
        text: 'La ligne de canapés AUSTER a été conçue pour être le parfait allié pour un intérieur cocooning réussi !',
        bigText1:
          'La ligne de canapés AUSTER a été conçue pour être le parfait allié pour un intérieur cocooning réussi ! Cette collection a été pensée par nos designers dans des matières douillettes et des teintes rassurantes pour se lover dans un sofa aux courbes enveloppantes.',
        bigText2:
          "La collection AUSTER se profile sous des déclinaisons de matières plus douces et stylées les unes des autres : velours côtelé super tendance ou imprimé aux teintes cosy proche du caractère scandi. Sa structure se compose de bois d'eucalyptus, ses pieds en bois de caoutchouc, et son assise rebondie de haute densité certifiée est une véritable invitation à la détente et au bien-être. Un canapé avec un effet super moelleux effet nuage pour une déco chaleureuse ! ",
        price: 1749,
        rating: 4,
        totalVote: 14,
        stock: 6,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5ef0ed58ef8d1064046263.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5ef0ed5bad31d220111998.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 4,
        src: 'https://cdn.nvgallery.com/static/images/6054d9de17834659598586.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'KAUFMAN',
        text: "La tendance fifties s'impose de plus en plus dans nos intérieurs avec le canapé KAUFMAN.",
        bigText1:
          "La tendance fifties s'impose de plus en plus dans nos intérieurs avec le canapé KAUFMAN. Ce canapé d'angle design s'adapte à tous les styles et à tous les types de meubles, autant classique que contemporain. ",
        bigText2:
          "Le design de KAUFMAN se compose d'un tissu texturé gris dorian et d'un solide piètement en métal noir. Son assise avec ses 6 coussins tout doux - déhoussables - ses lignes courbées et son design arrondi évoquent une déco cocooning, et apportent une vraie touche d'élégance à l'espace salon.",
        price: 2599,
        rating: 4,
        totalVote: 10,
        stock: 16,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/6054d9da5030b649770532.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/6054d9e32ce03346049968.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 5,
        src: 'https://cdn.nvgallery.com/static/images/3SSREVGRBK002_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'REVOLT',
        text: 'Le canapé c’est LE meuble pour lequel on a indiscutablement une exigence particulière.',
        bigText1:
          'Le canapé c’est LE meuble pour lequel on a indiscutablement une exigence particulière, il doit s’adapter à notre quotidien et nos envies. REVOLT c’est le canapé sur-mesure pour votre salon Vous êtes fan de ses rondeurs et son style neo 70’s mais vivez dans un petit espace ? Optez simplement pour un de ses modules – vous pourrez toujours agrandir votre sofa plus tard.',
        bigText2:
          'REVOLT a été conçu avec un solide piètement en acier inoxydable noir, et son assise d’une haute densité - 32g/cm3 - se déplie sous des tissus doux, texturés, chic et cosy. Pour un effet encore plus cocooning ses coussins - fournis avec REVOLT - en velours algue marine apporteront un peu plus de relief à votre coin détente.',
        price: 1699,
        rating: 3,
        totalVote: 28,
        stock: 9,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/3SSREVGRBK002_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/3SSREVGRBK002_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 6,
        src: 'https://cdn.nvgallery.com/static/images/BCCVMIDGBBD001_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'MIDNIGHT',
        text: 'Notre canapé convertible clic-clac MIDNIGHT se démarque par son originalité et ses lignes contemporaines.',
        bigText1:
          "Notre canapé convertible clic-clac MIDNIGHT se démarque par son originalité et ses lignes contemporaines. La variété des tissus employés sur son design lui apporte tour à tour une touche précieuse et raffinée - Et les pieds en acier inoxydable noir ou laiton, une bonne stabilité à l'assise.",
        bigText2:
          "L'aspect pratique du canapé-lit n'a rien enlevé à la singularité de la collection MIDNIGHT. L'époque des canapés convertibles au design peu inspirant et non esthétique, provoquant souvent des troubles du sommeil ou des douleurs au dos est désormais révolue !",
        price: 1699,
        rating: 5,
        totalVote: 30,
        stock: 13,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/BCCVMIDGBBD001_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/BCCVMIDGBBD001_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 7,
        src: 'https://cdn.nvgallery.com/static/images/BC3PBRITBBK007_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'BRICK LANE',
        text: "Notre canapé design BRICK LANE plaira à ceux qui aiment les produits d'exception.",
        bigText1:
          "Son design fort et minimaliste à la fois attirera sans aucun doute tous les regards ! L'assise confortable de ce canapé 3 places saura répondre à vos envies de détente.",
        bigText2:
          'Avec ses pieds obliques en bois massif noir et le capiton du dossier, cette création saura se faire remarquer. BRICK LANE se pare de beige tendre pour un véritable effet cosy chic. Attention à ne pas exposer le tissu à la lumière directe du soleil, pour éviter de ternir les fibres et la qualité de la teinte.',
        price: 1399,
        rating: 4,
        totalVote: 3,
        stock: 3,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/BC3PBRITBBK007_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/BC3PBRITBBK007_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 8,
        src: 'https://cdn.nvgallery.com/static/images/6076bd244acaf530719203.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'NORMA',
        text: 'Parmi les grands indispensables du salon cosy, le canapé 2 places NORMA se place en tête.',
        bigText1:
          'Parmi les grands indispensables du salon cosy, le canapé 2 places NORMA se place en tête. Pas de doute il a été conçu pour la détente, on imagine parfaitement la sensation de se blottir dans ses coussins douillets et son assise rebondie.',
        bigText2:
          "Doté d'une assise basse type loft ponctuée par un capitonnage, ce sofa 2 places crée instantanément une impression dynamique et accueillante. Et bel avantage, en déplaçant ses coussins rembourrés NORMA offre facilement la possibilité d'un couchage d'appoint très pratique - 180x100. Le polochon est fixé à l'aide d'une couture, soit non mobile.",
        price: 1299,
        rating: 5,
        totalVote: 8,
        stock: 5,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/6076bd3342c2a707205974.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/6076bd39d9135650264038.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 9,
        src: 'https://cdn.nvgallery.com/static/images/605b09f19d6bd170101944.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'DRIES',
        text: 'Combinant confort et style, le canapé DRIES se caractérise par un profilage simple et rebondi.',
        bigText1:
          "Avec des lignes épurées et ses proportions équilibrées, le canapé 2 places DRIES propose une pièce 100% design pour offrir à votre salon le caractère qu'il mérite. DRIES donnera facilement le ton aux éléments de déco avoisinants - fauteuils, table basse ou meubles d'appoints - permettant d'ancrer votre espace dans une atmosphère très soignée.",
        bigText2:
          "Combinant confort et style, le canapé DRIES se caractérise par un profilage simple et rebondi. Son assise est composée d'un rembourrage haute qualité - 28-30KG/m3 - recouvert par son tissu à la teinte désert taupe, tout en détail car texturé. Ce canapé 2 places est porté par un solide piètement sans surcharge visuelle en métal noir.",
        price: 1199,
        rating: 5,
        totalVote: 21,
        stock: 15,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/605b09f3c1941037660671.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/605b09f5576fe520270885.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 10,
        src: 'https://cdn.nvgallery.com/static/images/603549e697c14180479896.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'ENZO',
        text: "Véritable gain de place lorsqu'ils sont assemblés et pur effet design lorsqu'ils sont séparés !",
        bigText1:
          "Avec notre collection organique inspirée directement du galet de plage, nos designers ont pensé un banc et un pouf parfait à disposer en face à face. Véritable gain de place lorsqu'ils sont assemblés et pur effet design lorsqu'ils sont séparés ! Parfait à associer avec les canapés et fauteuils GIULIA.",
        bigText2:
          "Le design du banc ENZO se veut proche du sol et séduit par ses proportions généreuses - profondeur d'assise : 100x60 cm. Son assise est en mousse haute densité - garantie sans rembourrage de plumes (!) - pour offrir un confort moelleux et relaxant. Il est habillé d'un tissu super cosy et texturé bouclé écru - densité 630g/m2.",
        price: 499,
        rating: 5,
        totalVote: 17,
        stock: 6,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/603549ea16baf731058360.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/603549edbd5b9258357081.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 11,
        src: 'https://cdn.nvgallery.com/static/images/611ce217cc4fc403672119.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'RIVAL',
        text: "Le banc RIVAL c'est la bonne idée autant pour les petits espaces que pour les plus grands.",
        bigText1:
          "Le banc RIVAL c'est la bonne idée autant pour les petits espaces que pour les plus grands. Il a été conçu dans un esprit très contemporain-chic, afin d'apporter une solution modulable inspirée par le courant des meubles dits « malins » ou multifonctions.",
        bigText2:
          "Le banc RIVAL est composé d'un piètement en métal noir. Et son assise - disponible sous différents coloris - est super confortable : mousse de haute qualité, garantie sans remplissage de plume (!) ' 28-30 kg/m3 !",
        price: 479,
        rating: 3,
        totalVote: 32,
        stock: 5,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/611ce217ce4fc637509595.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/611ce219ceb67009456635.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 12,
        src: 'https://cdn.nvgallery.com/static/images/BBCSVERGBLG007_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'VERTIGO',
        text: "En bout de lit, dans l'entrée ou dans le salon, cette banquette aux lignes claires trouvera facilement sa place.",
        bigText1:
          "En bout de lit, dans l'entrée ou dans le salon, cette banquette aux lignes claires trouvera facilement sa place. On la voit bien dans un intérieur contemporain où elle fera sûrement rentrer de l'élégance. Laissez-vous séduire par son coloris taupe pour donner du caractère à votre intérieur !",
        bigText2:
          "Son épaisse assise en velours taupe et ses pieds en acier inoxydable de couleur laiton s'harmonisent pour un résultat chic et moderne. Vous préférez un style plus industriel ? Easy ! Notre banc VERTIGO existe aussi en couleur grise avec un piètement en fer noir.",
        price: 579,
        rating: 5,
        totalVote: 6,
        stock: 13,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/BBCSVERGBLG007_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/BBCSVERGBLG007_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      }
    ]
  },
  rangement: {
    products: [
      {
        id: 1,
        src: 'https://cdn.nvgallery.com/static/images/605e21af187be796977482.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'LINCOLN',
        text: 'Trois siècles après son apparition, l’iconique cannage de rotin fait son revival dans le monde de la déco !',
        bigText1:
          'Trois siècles après son apparition, l’iconique cannage de rotin fait son revival dans le monde de la déco ! Nos designers ont imaginé la collection LINCOLN se déclinant du bureau, à la table à manger, en passant par la commode et le meuble TV – pour répondre à tous les besoins du quotidien en amenant cet esprit retro chic et super naturel en matière de déco.',
        bigText2:
          'La ligne de meubles LINCOLN propose une base de solide matériaux durables et authentiques : bois (composite + peau de frêne) et cannage naturels. Son chic s’exprime par les lignes de son piètement, et sa singularité par son cannage de rotin - utilisant une technique de tissage complètement naturelle. La version buffet offre de belles capacités de rangements avec 2 tiroirs au centre et deux portes latérales.',
        price: 799,
        rating: 4,
        totalVote: 10,
        stock: 26,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/605e21af30db2956980340.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/605e21b13c050530523237.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 2,
        src: 'https://cdn.nvgallery.com/static/images/6058d68e8d3e6489387862.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'BARTOLO',
        text: 'Meuble intelligent ou 2 en 1, le banc de rangement BARTOLO est parfait pour les petits comme les grands espaces.',
        bigText1:
          "Meuble intelligent ou 2 en 1, le banc de rangement BARTOLO est parfait pour les petits comme les grands espaces. Pour les petites surfaces il permet de camoufler ses essentiels de façon maline - type couette et oreillers - et pour les plus grandes surfaces, il se plaira autant comme banc d'entrée, que dans la partie salon, ou chambre - façon dressing ou bout-de-lit.",
        bigText2:
          "Le banc de rangement BARTOLO a été conçu afin d'apporter une solution modulable inspirée par le courant des meubles dits  malins ou multifonctions. Il se compose d'un solide piètement en bois de noyer veiné. Et son assise en velours vert végétal, avec ses trois boutons type capitonnage propose un confort idéal : mousse de haute qualité, 28-30 kg/m3.",
        price: 359,
        rating: 5,
        totalVote: 28,
        stock: 2,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/6058d69021190466187307.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/6058d68e8c28d272575590.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 3,
        src: 'https://cdn.nvgallery.com/static/images/6005a3d550b24008378806.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'STARK',
        text: 'STARK a été pensé selon le mythique design des années 60 être minimaliste et créer du style dans votre maison.',
        bigText1:
          "STARK a été pensé selon le mythique design des années 60' être minimaliste et créer du style dans votre maison. Le meuble télé détermine la configuration de votre salon, il se doit d'être aussi esthétique que pratique. STARK a été dessiné avec des lignes graphiques et harmonieuses. La touche retro du meuble TV STARK s'adaptera parfaitement à une classique et sobre pour une atmosphère intemporelle.",
        bigText2:
          "Le meuble TV STARK a été pensé tout en élégance pour épouser parfaitement les courbes de la télévision dans votre salon. Il est composé d'un bois de composite naturel - veiné - reposant sur un piètement graphique en métal inoxydable doré.",
        price: 749,
        rating: 5,
        totalVote: 1,
        stock: 12,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/6005a3d5567d6418790888.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/6005a3d6d0789569430668.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 4,
        src: 'https://cdn.nvgallery.com/static/images/5fce845b93b40274394860.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'MORRIS',
        text: 'Le buffet MORRIS offre instantanément à l’intérieur de la maison une touche d’élégance minimale naturelle.',
        bigText1:
          'Le buffet MORRIS offre instantanément à l’intérieur de la maison une touche d’élégance minimale naturelle. Le détail de ses portes complètement tressées fait toute la différence : original sans trop en faire. Le meuble de rangement MORRIS se plaira dans la maison que le contemporain ou plus slow life.',
        bigText2:
          "Le buffet MORRIS se compose de bois d'acacia noir, tout en détail avec ses portes tressées à la main en corde et jute. Il s'ouvre sur une étagère centrale de 72 cm.Chaque buffet MORRIS est unique et à fait l'objet de plusieurs jours de travail. Nos produits sont artisanaux et issus de la main de l'humain, on peut y retrouver certaines légères irrégularités dues au charme de l'artisanat.",
        price: 349,
        rating: 3,
        totalVote: 89,
        stock: 9,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5fce845b88a3d976104669.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5fce845d4e6c7430679403.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 5,
        src: 'https://cdn.nvgallery.com/static/images/DBVSVA2GBBW009_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'VARYS',
        text: "VARYS joue sur un mélange d'inspirations et de matériaux pour créer une ambiance unique.",
        bigText1:
          "Le principe du coffre, soit l'architecture des meubles de type médiéval a été modernisé pour ne garder que l'esprit et oublier le côté vieillot et rustique. L'élégance de la teinte noire et la simplicité des lignes du vaisselier VARYS mettront idéalement en valeur votre vaisselle, vos objets personnels, ou vos documents secrets.",
        bigText2:
          "Sa base métallique stable porte tout en finesse et de façon aérienne son solide bloc de bois de frêne volontairement imposant. C'est l'alliance entre le brut et la délicatesse : une forte dualité réunie. Les finitions et la teinte du vaisselier VARYS apportent un aspect contemporain et indémodable.",
        price: 1599,
        rating: 5,
        totalVote: 14,
        stock: 2,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/DBVSVA2GBBW009_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/DBVSVA2GBBW009_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 6,
        src: 'https://cdn.nvgallery.com/static/images/5fc937697072b457576560.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'YORK',
        text: 'La commode YORK avec son beau bois brut travaillé artisanalement, est très pratique.',
        bigText1:
          "Ce meuble de rangement se profile sous un look noble et authentique, complètement dans la tendance actuelle. YORK apporte incontestablement ce véritable retour à la nature et à l'essentiel en matière de design intérieur.",
        bigText2:
          "La commode YORK se distingue particulièrement par le travail sur son bois d'acacia, notamment sur sa face principale avec ce look presque retro. Elle propose un bel espace de rangement pour la nuit, avec ses 3 tiroirs de 20x20 cm.",
        price: 599,
        rating: 5,
        totalVote: 37,
        stock: 17,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5fc9376d89ced744278852.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5fc93771bdf71428914523.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 7,
        src: 'https://cdn.nvgallery.com/static/images/5f92e20daf934343827054.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'GRANT',
        text: 'GRANT séduit indiscutablement avec son jeu de matière et son contraste couleur apportant ce petit côté retro très fifties.',
        bigText1:
          "GRANT séduit indiscutablement avec son jeu de matière et son contraste couleur apportant ce petit côté retro très fifties. On l'aime autant dans une entrée, au fond d'un salon, que dans une chambre à coucher - car avec seulement deux portes elle est parfaite pour les petits comme les grands espaces.",
        bigText2:
          "Les détails ont leurs importances, puisque ses portes et son contour sont en fibre de rotin . Elle peut ainsi s'exposer sous tous les angles ! Une matière intéressante à travailler car écologique - recyclable et pas en voie de disparition. On adore ce subtil effet contrastant toute en élégance naturelle. Chacune des armoires GRANT est confectionnée artisanalement avec un savoir-faire unique.",
        price: 1399,
        rating: 5,
        totalVote: 3,
        stock: 1,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5f92e20c4c9aa109385701.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5f92e20fabbcd337301078.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 8,
        src: 'https://cdn.nvgallery.com/static/images/60cb545f7c830841276144.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'ARMON',
        text: "Par son aspect naturellement tendance, cette armoire sera à son aise autant dans l'entrée.",
        bigText1:
          "Confectionnée artisanalement, sous sa silhouette angulaire l'armoire ARMON séduit par son jeu de matières amenant cet esprit indiscutablement retro. Par son aspect naturellement tendance, cette armoire sera à son aise autant dans l'entrée, dans le salon, que dans la chambre. Parfait pour les petits comme les grands espaces, elle est disponible sous 2 formats.",
        bigText2:
          "ARMON est travaillée sur sa structure à partir de bois d'acajou. Particulièrement esthétique, ce bois dispose d'une belle fibre lisse et agréable à façonner. Ses portes ont elles été conçues à partir de fibre de rotin car écologique - recyclable et pas en voie de disparition. Ce buffet offre une belle capacité de rangement avec plusieurs étagères et une penderie.",
        price: 1299,
        rating: 5,
        totalVote: 12,
        stock: 7,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/60cb545f96f73135521729.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/60cb54627b7a4263452494.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 9,
        src: 'https://cdn.nvgallery.com/static/images/5f92c11ac51c6295415314.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'HAYES',
        text: 'Complètement dans la tendance du mobilier original et authentique.',
        bigText1:
          "HAYES séduit indiscutablement avec son jeu de matière et son contraste couleur apportant ce petit côté retro très fifties. On l'aime autant dans une entrée, au fond d'un salon, que dans une chambre à coucher - car avec seulement deux portes elle est parfaite pour les petits comme les grands espaces.",
        bigText2:
          "L'armoire HAYES est travaillée sur sa structure à partir de bois d'acajou. Particulièrement esthétique, ce bois dispose d'une belle fibre lisse et agréable à façonner. Ses portes ont elles été conçues à partir de fibre de rotin car écologique - recyclable et pas en voie de disparition. On adore ce subtil effet contrastant toute en élégance naturelle. Ce buffet offre une belle capacité de rangement avec plusieurs étagères à moduler selon ses envies.",
        price: 1799,
        rating: 4,
        totalVote: 9,
        stock: 2,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5f92c11c3faf2186662639.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5f92c11eeb5d2211795911.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 10,
        src: 'https://cdn.nvgallery.com/static/images/5f92c11ac51c6295415314.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'BRUCE',
        text: "BRUCE - une console d'entrée ou de salon sobre, sophistiquée et pratique.",
        bigText1:
          "BRUCE - une console d'entrée ou de salon sobre, sophistiquée et pratique. Ses lignes rigoureuses s'inscrivent parfaitement dans une décoration chic tout en conservant un modern mood.Une pièce design emblématique qui s'inscrive dans l'air du temps.",
        bigText2:
          "Les matières de cette table console s'accordent pour vous offrir le meilleur design : un épais placage de bois associé à un solide piètement en métal doré ou noir résolument contemporain. BRUCE est doté de trois tiroirs qui vous offrent suffisamment de capacité pour ranger vos essentiels : 38,8x32x5 cm.",
        price: 799,
        rating: 5,
        totalVote: 19,
        stock: 12,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/603fd13344169155991556.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/603fd136af7e1785033514.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 11,
        src: 'https://cdn.nvgallery.com/static/images/DEBSVO2GBGS001_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'VOLTAIRE',
        text: 'Cette étagère design est non seulement pratique mais est surtout un très bel objet de déco.',
        bigText1:
          "Cette étagère design est non seulement pratique mais est surtout un très bel objet de déco. Vous pourriez y poser vos livres ou toutes sortes d'objets de décoration afin d'embellir votre chambre, votre salon ou pourquoi pas votre hall d'entrée ?Avec ses lignes épurées, Voltaire s'intègre parfaitement dans un intérieur moderne ou classique.",
        bigText2:
          "On adore cette étagère design en verre et métal. Le mix de ces deux matières accentue la modernité de cette bibliothèque. Léger et graphique, ce magnifique meuble étagère apporte une touche élégante à votre maison. La couleur laiton est super tendance et elle a le pouvoir d'illuminer l'espace avec de doux reflets. Voltaire s'inscrit donc dans une décoration d'intérieur chaleureuse. ",
        price: 749,
        rating: 5,
        totalVote: 1,
        stock: 18,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/DEBSVO2GBGS001_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/DEBSVO2GBGS001_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 12,
        src: 'https://cdn.nvgallery.com/static/images/5fcf68ebcbd7f760262167.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'DYKA',
        text: "Pour les adeptes du style vintage et des matière naturelles, apportant une véritable personnalité à l'intérieur de la maison, la collection DYKA est idéale.",
        bigText1:
          "Cette collection propose 3 variantes : table de chevet, commode, et meuble tv - aussi à l'aise avec une déco industrielle que plus contemporaine. On adore DYKA avec son joli look retro et nature très en vogue !",
        bigText2:
          "DYKA se compose de bois de manguier, particulièrement apprécié pour son aspect brut et unique, mais aussi écologique ! Ce bois n'est ramassé qu'une fois que l'arbre n'est plus en mesure de porter les fruits. DYKA est unique et à fait l'objet de plusieurs jours de travail. Nos produits sont artisanaux et issus de la main de l'humain, il peut y retrouver certaines légères irrégularités dues au charme de l'artisanat.",
        price: 349,
        rating: 3,
        totalVote: 9,
        stock: 28,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5fcf68ebab3e8764310075.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5fcf68eda0919516821486.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      }
    ]
  },
  luminaire: {
    products: [
      {
        id: 1,
        src: 'https://cdn.nvgallery.com/static/images/60819509857dc490983372.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'ALBUS',
        text: 'Avec des lignes graphiques en apparence simples et élégantes, la lampe de table ALBUS innove.',
        bigText1:
          "Avec des lignes graphiques en apparence simples et élégantes, la lampe de table ALBUS innove en jouant sur cette tendance pleine de charme. Proche de l'objet design à l'esprit vintage chic, ALBUS apportera une belle luminosité et mettra facilement en valeur autant une console d'entrée, qu'une table de nuit, qu'un espace de travail type bureau.",
        bigText2:
          "Véritable pièce couture pour la maison, la lampe à poser ALBUS se caractérise par son allure faussement sage affichant un abat-jour blanc parfaitement plissé. Son piètement se décline dans un métal doré inoxydable façon tubes. ALBUS est à munir d'une ampoule E27 (non fournie), 40W. Son câble de 180 cm a été tressé, pour une lampe lookée jusque dans les moindres détails.",
        price: 169,
        rating: 3,
        totalVote: 13,
        stock: 6,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/6081950b92165274150825.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/6081950e898e2143179984.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 2,
        src: 'https://cdn.nvgallery.com/static/images/6033dfbc28bc5408105754.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'DAWSON',
        text: "L'applique murale n'est pas seulement un éclairage, elle apporte une touche décorative à un endroit clé de votre pièce.",
        bigText1:
          "L'applique murale n'est pas seulement un éclairage, elle apporte une touche décorative à un endroit clé de votre pièce. DAWSON a été conçue dans l'esprit d'un objet décoratif précieux et original à la fois. Le choix sur les couleurs et les matériaux a été déterminé pour créer une sensation chaleureuse dans votre intérieur. Avec sa forme subtilement géométrique, c'est un look néo-chic garanti !",
        bigText2:
          "DAWSON se compose de plusieurs matériaux dont la nature influe sur la sensation de chaleur - Réchauffer son intérieur en dégageant une luminosité douce et confortable. L'applique murale DAWSON associe un métal en acier chromé doré - aéré par des trous réguliers pour laisser s'échapper subtilement la lumière ' et un verre translucide comme diffuseur. Et pour éviter les possibles problèmes de brûlures sur les appliques, le choix s'est porté sur ces matériaux solides et chauffant peu.",
        price: 99,
        rating: 5,
        totalVote: 72,
        stock: 22,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/6033dfbc2cc6c356671736.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/6033dfbddfb6d613657855.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 3,
        src: 'https://cdn.nvgallery.com/static/images/ELSLZAHNANA003_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'ZAHARA',
        text: "Technique de tressage née dans les années 1700 consistant à tresser 6 brins d'écorce de rotin.",
        bigText1:
          "Technique de tressage née dans les années 1700 consistant à tresser 6 brins d'écorce de rotin (la canne) en formant des octogones réguliers, au bénéfice d'un style décoratif délicat. Ce tissage du rotin requiert patience et concentration de la part des artisans qui l'exécutent. La suspension ZAHARA le porte ici sous sa teinte naturellement préservée.",
        bigText2:
          "Célèbre réplique se vérifiant à nouveau aujourd'hui, car le rotin après avoir connu sa période « kitsch » s'est réapproprié certaines de nos pièces pour se révéler authentique, naturel, chaleureux, et devenir super design. Tout ce qu'on adore en matière de Home déco ! Affichant cette touche vintage très tendance, ZAHARA profite d'un jeu de tressage très original modernisant du cannage de rotin : design très naturel et pur.",
        price: 69,
        rating: 4,
        totalVote: 17,
        stock: 76,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/ELSLZAHNANA003_slider_3.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/ELSLZAHNANA003_slider_4.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 4,
        src: 'https://cdn.nvgallery.com/static/images/5f885bab94cf9777030267.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'NAPA',
        text: 'Chacune des lampes NAPA bénéficie d’un travail de conception artisanal précis et soigné.',
        bigText1:
          'Chacun de nos designs est réalisé à la main dans une manufacture repérée par nos soins à une centaine de km au-dessus de Lisbonne. Dans les terres reculées où celle-ci est située, la culture de la céramique - ou terre/argile cuite – est un savoir-faire local, effectué avec précision et réputé pour la qualité de son travail.',
        bigText2:
          "Chacune des lampes NAPA bénéficie d’un travail de conception artisanal précis et soigné. Son abat-jour est tissé à partir de fibre de jute, que l'on apprécie pour son aspect indéniablement naturel. Sa base en céramique blanche irrégulière propose une jolie déclinaison de teinte pour l'ensemble de cet objet.",
        price: 99,
        rating: 5,
        totalVote: 20,
        stock: 16,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5f885bab9f30d125302780.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5f885bfa6ec66720361131.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 5,
        src: 'https://cdn.nvgallery.com/static/images/ELAPFLAMBBK003_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'FLAMINGO',
        text: "Complètement dans l'air du temps, l'applique FLAMINGO apportera du caractère à votre intérieur !",
        bigText1:
          "Complètement dans l'air du temps, l'applique FLAMINGO apportera du caractère à votre intérieur ! S'adaptant à tous vos désirs, cette lampe de table en métal noirest à la fois stylé et pratique. C'est la pièce design parfaite vous permettant de libérer de l'espace que ce soit sur votre table basse, votre bureau, ou votre table de nuit.",
        bigText2:
          "Notre lampe de table FLAMINGO est légère mais muni d'une base en marbre noir apportant une bonne stabilité. On aime ses lignes fines et épurées qui soulignent son style pittoresque. Pendue à sa tige, son ampoule a fait le choix ne pas se cacher pour conserver l'aspect authentique, indus et un brin retro du luminaire. Le plus ? L'éclairage peut être plus précis sans être agressif. FLAMINGO se plait beaucoup dans une ambiance type loft.",
        price: 49,
        rating: 5,
        totalVote: 77,
        stock: 19,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/ELAPFLAMBBK003_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/ELAPFLAMBBK003_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 6,
        src: 'https://cdn.nvgallery.com/static/images/5f88665f1b7b3137867506.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'RETA',
        text: 'Chacune des lampes RETA bénéficie d’un travail de conception artisanal précis et soigné.',
        bigText1:
          'Fabriquée au Portugal auprès de notre artisan partenaire, la lampe à poser RETA mêle simplicité chic et arty en jouant sur la tendance de l’objet sculptural et unique que l’on adore. Chacun de nos designs est réalisé à la main dans une manufacture repérée par nos soins à une centaine de km au-dessus de Lisbonne. Dans les terres reculées où celle-ci est située, la culture de la céramique - ou terre/argile cuite – est un savoir-faire local, effectué avec précision et réputé pour la qualité de son travail.',
        bigText2:
          "Chacune des lampes RETA bénéficie d’un travail de conception artisanal précis et soigné. Son abat-jour est tissé à partir de fibre de jute, que l'on apprécie pour son aspect indéniablement naturel. Sa base en céramique a été travaillée dans l'esprit du pur objet déco et dans un dégradé de teinte pour un effet complètement naturel.",
        price: 199,
        rating: 5,
        totalVote: 2,
        stock: 39,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5f88665f3851a838300092.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5f8866612b70a845930334.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 7,
        src: 'https://cdn.nvgallery.com/static/images/6082d3b070336504249192.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'GAIA',
        text: "Inspirée par l'éternel et indémodable look contemporain-chic, la lampe GAIA se pare de matériaux organiques et naturels",
        bigText1:
          "Inspirée par l'éternel et indémodable look contemporain-chic, la lampe GAIA se pare de matériaux organiques et naturels pour afficher cette élégance intemporelle que l'on adore. Proche de l'objet précieux, l'aspect minéral de cette 'lampe à poser' sublimera facilement table de chevet ou bout de canapé et ne laissera personne indifférent.",
        bigText2:
          "La base de la lampe de table GAIA est constituée d'un véritable bloc de marbre blanc, très pur et résistant apportant cet aspect raffiné et authentique. Chaque lampe GAIA est unique.  Son abat-jour est fabriqué à partir de lin naturel afin de diffuser une lumière douce, agréable et enveloppante. GAIA est à munir d'une ampoule E27 (non fournie), 40W. Son câble tressé propose une longueur de 180 cm.",
        price: 249,
        rating: 5,
        totalVote: 12,
        stock: 29,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/6082d3b9ad535506342517.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/6082d3bb950ce985040528.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 8,
        src: 'https://cdn.nvgallery.com/static/images/5ee9fcdb8a72f167227019.jpeg?width=&height=&fit=bounds&quality=85,73',
        title: 'FREEZE',
        text: "Pilier de la décoration scandi, le lampadaire trépied est apprécié pour la chaleur qu'il apporte à la pièce dans laquelle il est placé.",
        bigText1:
          'Les 3 classiques pieds, permettant une excellente stabilité, ont ici été adaptés en « branches » lui conférant un aspect très proche du bouquet. Les globes remplacent presque les boutons de fleurs, recouvrant 3 ampoules : 2xLED G9 et 1xE27, non fournies.',
        bigText2:
          "Le lampadaire FREEZE réinvente le luminaire trépied, en y apportant une singularité très fancy ! Non content d'afficher une excellente luminosité, il constitue également l'objet déco hautement désirable pour la maison",
        price: 249,
        rating: 5,
        totalVote: 38,
        stock: 9,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/5ee9fcdd62500397409131.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5ee9fce16cb1a595943149.jpeg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 9,
        src: 'https://cdn.nvgallery.com/static/images/ELSLHELGLBK003_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'HELIOTROPE',
        text: "HELIOTROPE s'inspire du courant industriel pour créer une pièce entre le brut et le fancy.",
        bigText1:
          "HELIOTROPE s'inspire du courant industriel pour créer une pièce entre le brut et le fancy. Ces suspension s se caractérisent par un design en acier inoxydable noir ou laiton, et un globe en verre transparent pour laisser passer une lumière chaude - LED, G4, 3W, fournie - et ramener à cet esprit authentique très tendance dans la maison.",
        bigText2:
          "La représentation du « LESS IS MORE ». Si les suspensions HELIOTROPE font régner la simplicité sous ses airs épurées et sobres - Elle confère à la déco intérieure une allure irrésistible ! Dans cette parfaite cohérence avec le « Minimal mood », l'ampoule ne se couvre pas du traditionnel abat-jour avec cette suspension. HELIOTROPE fait partie de ces pièces pour la maison qui ne se cache pas !",
        price: 79,
        rating: 5,
        totalVote: 68,
        stock: 59,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/ELSLHELGLBK003_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/ELSLHELGLBK003_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 10,
        src: 'https://cdn.nvgallery.com/static/images/ELSLTARBKBK003_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'TARTAN',
        text: 'Simple, design et robuste - voici les fondements des suspension s TARTAN.',
        bigText1:
          "Simple, design et robuste - voici les fondements des suspension s TARTAN. Exclusivement constituée d'aluminium doré ou noir mat, est aussi chic que pratique. Son câble ou fil est ajustable à la hauteur souhaitée et a été tissé - parce que le détail fait toujours la différence pour donner de l'allure au style.La suspension TARTAN est disponible sous 2 teintes, et s'équipe d'une ampoule Led GU10 - 25W.",
        bigText2:
          "Cette suspension façon tube séduit par son esprit résolument pratique et fonctionnel, tout en apportant un vrai style pointu à l'intérieur en apportant une vrai revival au style indus.Parfait autant pour l'industriel que le plus contemporain, seule ou en accumulation - au dessus d'un bar, en gold ou noir mat, TARTAN s'adapte à son environnement sous toutes ses formes pour y apporter sa singularité chic.",
        price: 59,
        rating: 4,
        totalVote: 32,
        stock: 9,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/ELSLTARBKBK003_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/ELSLTARBKBK003_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 11,
        src: 'https://cdn.nvgallery.com/static/images/ELAPEXEGPGP003_slider_1.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'EXETER',
        text: "L'applique murale EXETER a pour avantage de ne prendre aucune place tout en apportant une vraie touche chic.",
        bigText1:
          "L'applique murale EXETER a pour avantage de ne prendre aucune place tout en apportant une vraie touche chic.Elle se caractérise par son total look noir ou gold, en acier inoxydable. Elle se pose et se fixe facilement, et fait gagner soit de la place soit une ambiance plus intimiste.",
        bigText2:
          "L'applique graphique : vrai classique en matière de design. C'est elle qui vient décorer, métamorphoser, et illuminer le mur !La ligne d'appliques EXETER remplie parfaitement ces caractéristiques, en possédant un charme supplémentaire par rapport aux autres, avec un style industriel chic presque proche de l'Art déco.",
        price: 99,
        rating: 4,
        totalVote: 13,
        stock: 5,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/ELAPEXEGPGP003_slider_2.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/ELAPEXEGPGP003_slider_3.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      },
      {
        id: 12,
        src: 'https://cdn.nvgallery.com/static/images/61002af2b8852397617301.jpg?width=&height=&fit=bounds&quality=85,73',
        title: 'GIGLIO',
        text: "D'inspiration purement méridionale, le design de GIGLIO a été insufflé par l'architecture italienne toscane.",
        bigText1:
          "Sculpture lumineuse au charme naturel, la lampe de table GIGLIO nous charme par la douceur de ses formes parfaitement proportionnées. D'inspiration purement méridionale, le design de GIGLIO a été insufflé par l'architecture italienne toscane du même nom et sa production artisanale locale.",
        bigText2:
          "GIGLIO : le luminaire arty. Travaillée dans un bois teinté vert thym, la lampe de table GIGLIO a cette capacité à habiller son environnement tout en se faisant discrète. Un piètement qui contraste harmonieusement avec son abat-jour blanc parfaitement plissé sous une forme cubique - soit l’idéal pour accueillir une lumière tamisée dans son intérieur. GIGLIO est à munir d'une ampoule E27 (non fournie), 40W. Son cordon d'alimentation de 180cm est gainé de textile tressé, pour une lampe lookée dans les moindres détails.",
        price: 199,
        rating: 4,
        totalVote: 16,
        stock: 8,
        otherSrc: [
          'https://cdn.nvgallery.com/static/images/61002af4df6e4211073273.jpg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/61002af75a972898733222.jpg?width=&height=&fit=bounds&quality=85,73'
        ]
      }
    ]
  }
}
export default products
