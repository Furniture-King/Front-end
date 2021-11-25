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
        src: './images/images_luminaire/napa1.jpeg',
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
          './images/images_luminaire/napa2.jpeg',
          './images/images_luminaire/napa3.jpeg'
        ]
      },
      {
        id: 5,
        src: 'https://cdn.nvgallery.com/static/images/5f885bab94cf9777030267.jpeg?width=&height=&fit=bounds&quality=85,73',
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
          'https://cdn.nvgallery.com/static/images/5f885bab9f30d125302780.jpeg?width=&height=&fit=bounds&quality=85,73',
          'https://cdn.nvgallery.com/static/images/5f885bfa6ec66720361131.jpeg?width=&height=&fit=bounds&quality=85,73'
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
      }
    ]
  }
}
export default products
