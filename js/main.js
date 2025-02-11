const data = [
    {
        Name: 'Leo',
        Type: 'Cat',
        Breed: 'Main Coon',
        Sex: 'Male',
        Color: 'Tabby Brown',
        SpayedNeutered: 'Yes',
        Age: '4 Years',
        ID: '21567',
        Microchip: '982000365897412',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: 'Meet Leo, a majestic Maine Coon with a gentle and affectionate nature. Leo enjoys lounging in sunny spots, chasing feather toys, and cuddling up with his favorite humans. He gets along well with other pets and loves being brushed. Leo is looking for a loving home where he can be spoiled with love and attention.'
    },
    {
        Name: 'Charlie',
        Type: 'Cat',
        Breed: 'Siamese',
        Sex: 'Female',
        Color: 'Seal Point',
        SpayedNeutered: 'Yes',
        Age: '3 Years',
        ID: '34689',
        Microchip: '982000364562897',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: 'Say hello to Charlie, a talkative and intelligent Siamese cat who loves to be the center of attention. Charlie enjoys playing with interactive toys, climbing on cat trees, and curling up next to her favorite humans. She thrives in a home where she can engage in playful activities and receive plenty of affection.'

    },
    {
        Name: 'Oliver',
        Type: 'Cat',
        Breed: 'British Shorthair',
        Sex: 'Male',
        Color: 'Blue (Gray)',
        SpayedNeutered: 'Yes',
        Age: '5 Years',
        ID: '45231',
        Microchip: '982000364789654',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: 'This is Oliver, a calm and affectionate British Shorthair with a plush coat and soulful eyes. Oliver enjoys lounging in cozy spots, watching birds through the window, and receiving gentle chin rubs. He is a laid-back companion who would love a quiet and loving home where he can relax and be adored.'

    },
    {
        Name: 'Daisy',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: 'Rex',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: 'Bella',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: '',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: '',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: '',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: '',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: '',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: '',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: '',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: '',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: '',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: '',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: '',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    {
        Name: '',
        Type: '',
        Breed: '',
        Sex: '',
        Color: '',
        SpayedNeutered: '',
        Age: '',
        ID: '',
        Microchip: '',
        Status: ['Health checked', 'Vaccinations up to date', 'Regularly dewormed', 'Microchipped'],
        Bio: ''

    },
    
]