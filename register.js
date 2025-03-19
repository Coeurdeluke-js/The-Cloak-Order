document.addEventListener('DOMContentLoaded', function () {
    const nicknameInput = document.getElementById('nickname');
    const passwordInput = document.getElementById('password');
    const fullNameInput = document.getElementById('fullName');
    const phoneInput = document.getElementById('phone');
    const ageInput = document.getElementById('age');
    const emailInput = document.getElementById('email');
    const uidInput = document.getElementById('uid');
    const registerButton = document.getElementById('registerButton');
    const noUidButton = document.getElementById('noUidButton');
    const messageDiv = document.getElementById('message');
    const countryFlag = document.getElementById('countryFlag');
    const countryDropdown = document.getElementById('countryDropdown');
    const pageTitle = document.querySelector('h1');
    
    let uidHidden = false;
    let currentLanguage = 'es'; // Default language
    
    // Language translations
    const translations = {
        'es': { // Spanish
            title: 'Registro',
            nickname: 'Nickname',
            password: 'Contraseña',
            fullName: 'Nombre completo',
            phone: 'Teléfono',
            age: 'Edad',
            email: 'Correo Electrónico',
            uid: 'UID',
            noUid: 'No tengo',
            yesUid: 'Tengo',
            register: 'Darse de Alta',
            errorNickname: 'Por favor, ingrese un nickname.',
            errorPassword: 'Por favor, ingrese una contraseña.',
            errorFullName: 'Por favor, ingrese su nombre completo.',
            errorPhone: 'Por favor, ingrese un número de teléfono.',
            errorAge: 'Por favor, ingrese su edad.',
            errorInvalidEmail: 'Correo electrónico inválido.',
            errorInvalidAge: 'Por favor, ingrese una edad válida.',
            successMessage: 'Registro exitoso!',
            emailInUse: 'Este correo ya está registrado.',
            weakPassword: 'La contraseña es demasiado débil.'
        },
        'en': { // English
            title: 'Registration',
            nickname: 'Nickname',
            password: 'Password',
            fullName: 'Full Name',
            phone: 'Phone',
            age: 'Age',
            email: 'Email',
            uid: 'UID',
            noUid: 'I don\'t have',
            yesUid: 'I have one',
            register: 'Register',
            errorNickname: 'Please enter a nickname.',
            errorPassword: 'Please enter a password.',
            errorFullName: 'Please enter your full name.',
            errorPhone: 'Please enter a phone number.',
            errorAge: 'Please enter your age.',
            errorInvalidEmail: 'Invalid email address.',
            errorInvalidAge: 'Please enter a valid age.',
            successMessage: 'Registration successful!',
            emailInUse: 'This email is already registered.',
            weakPassword: 'The password is too weak.'
        },
        'fr': { // French
            title: 'Inscription',
            nickname: 'Pseudo',
            password: 'Mot de passe',
            fullName: 'Nom complet',
            phone: 'Téléphone',
            age: 'Âge',
            email: 'Adresse e-mail',
            uid: 'UID',
            noUid: 'Je n\'en ai pas',
            yesUid: 'J\'en ai un',
            register: 'S\'inscrire',
            errorNickname: 'Veuillez entrer un pseudo.',
            errorPassword: 'Veuillez entrer un mot de passe.',
            errorFullName: 'Veuillez entrer votre nom complet.',
            errorPhone: 'Veuillez entrer un numéro de téléphone.',
            errorAge: 'Veuillez entrer votre âge.',
            errorInvalidEmail: 'Adresse e-mail invalide.',
            errorInvalidAge: 'Veuillez entrer un âge valide.',
            successMessage: 'Inscription réussie !',
            emailInUse: 'Cette adresse e-mail est déjà enregistrée.',
            weakPassword: 'Le mot de passe est trop faible.'
        },
        'de': { // German
            title: 'Registrierung',
            nickname: 'Spitzname',
            password: 'Passwort',
            fullName: 'Vollständiger Name',
            phone: 'Telefon',
            age: 'Alter',
            email: 'E-Mail',
            uid: 'UID',
            noUid: 'Ich habe keine',
            yesUid: 'Ich habe eine',
            register: 'Registrieren',
            errorNickname: 'Bitte geben Sie einen Spitznamen ein.',
            errorPassword: 'Bitte geben Sie ein Passwort ein.',
            errorFullName: 'Bitte geben Sie Ihren vollständigen Namen ein.',
            errorPhone: 'Bitte geben Sie eine Telefonnummer ein.',
            errorAge: 'Bitte geben Sie Ihr Alter ein.',
            errorInvalidEmail: 'Ungültige E-Mail-Adresse.',
            errorInvalidAge: 'Bitte geben Sie ein gültiges Alter ein.',
            successMessage: 'Registrierung erfolgreich!',
            emailInUse: 'Diese E-Mail ist bereits registriert.',
            weakPassword: 'Das Passwort ist zu schwach.'
        },
        'it': { // Italian
            title: 'Registrazione',
            nickname: 'Nickname',
            password: 'Password',
            fullName: 'Nome completo',
            phone: 'Telefono',
            age: 'Età',
            email: 'Email',
            uid: 'UID',
            noUid: 'Non ne ho uno',
            yesUid: 'Ne ho uno',
            register: 'Registrati',
            errorNickname: 'Inserisci un nickname.',
            errorPassword: 'Inserisci una password.',
            errorFullName: 'Inserisci il tuo nome completo.',
            errorPhone: 'Inserisci un numero di telefono.',
            errorAge: 'Inserisci la tua età.',
            errorInvalidEmail: 'Indirizzo email non valido.',
            errorInvalidAge: 'Inserisci un\'età valida.',
            successMessage: 'Registrazione completata con successo!',
            emailInUse: 'Questa email è già registrata.',
            weakPassword: 'La password è troppo debole.'
        },
        'pt': { // Portuguese (for Brazil)
            title: 'Registro',
            nickname: 'Apelido',
            password: 'Senha',
            fullName: 'Nome completo',
            phone: 'Telefone',
            age: 'Idade',
            email: 'E-mail',
            uid: 'UID',
            noUid: 'Não tenho',
            yesUid: 'Tenho',
            register: 'Registrar',
            errorNickname: 'Por favor, digite um apelido.',
            errorPassword: 'Por favor, digite uma senha.',
            errorFullName: 'Por favor, digite seu nome completo.',
            errorPhone: 'Por favor, digite um número de telefone.',
            errorAge: 'Por favor, digite sua idade.',
            errorInvalidEmail: 'E-mail inválido.',
            errorInvalidAge: 'Por favor, digite uma idade válida.',
            successMessage: 'Registro bem-sucedido!',
            emailInUse: 'Este e-mail já está registrado.',
            weakPassword: 'A senha é muito fraca.'
        },
        'zh': { // Chinese
            title: '注册',
            nickname: '昵称',
            password: '密码',
            fullName: '全名',
            phone: '电话',
            age: '年龄',
            email: '电子邮件',
            uid: 'UID',
            noUid: '我没有',
            yesUid: '我有',
            register: '注册',
            errorNickname: '请输入昵称。',
            errorPassword: '请输入密码。',
            errorFullName: '请输入您的全名。',
            errorPhone: '请输入电话号码。',
            errorAge: '请输入您的年龄。',
            errorInvalidEmail: '无效的电子邮件地址。',
            errorInvalidAge: '请输入有效年龄。',
            successMessage: '注册成功！',
            emailInUse: '此电子邮件已注册。',
            weakPassword: '密码太弱。'
        },
        'ja': { // Japanese
            title: '登録',
            nickname: 'ニックネーム',
            password: 'パスワード',
            fullName: '氏名',
            phone: '電話番号',
            age: '年齢',
            email: 'メールアドレス',
            uid: 'UID',
            noUid: '持っていません',
            yesUid: '持っています',
            register: '登録する',
            errorNickname: 'ニックネームを入力してください。',
            errorPassword: 'パスワードを入力してください。',
            errorFullName: '氏名を入力してください。',
            errorPhone: '電話番号を入力してください。',
            errorAge: '年齢を入力してください。',
            errorInvalidEmail: '無効なメールアドレスです。',
            errorInvalidAge: '有効な年齢を入力してください。',
            successMessage: '登録が完了しました！',
            emailInUse: 'このメールアドレスは既に登録されています。',
            weakPassword: 'パスワードが弱すぎます。'
        }
    };
    
    // Map country codes to languages
    const countryLanguageMap = {
        '+44': 'en', // UK
        '+1': 'en',  // USA
        '+54': 'es', // Argentina
        '+86': 'zh', // China
        '+91': 'en', // India (using English)
        '+55': 'pt', // Brazil
        '+81': 'ja', // Japan
        '+49': 'de', // Germany
        '+33': 'fr', // France
        '+39': 'it', // Italy
        '+52': 'es'  // Mexico
    };
    
    const countryCodes = {
        '+44': { flag: 'uk.png', name: 'UK', language: 'en' },
        '+1': { flag: 'usa.png', name: 'USA', language: 'en' },
        '+54': { flag: 'argentina.png', name: 'Argentina', language: 'es' },
        '+86': { flag: 'china.png', name: 'China', language: 'zh' },
        '+91': { flag: 'india.png', name: 'India', language: 'en' },
        '+55': { flag: 'brazil.png', name: 'Brazil', language: 'pt' },
        '+81': { flag: 'japan.png', name: 'Japan', language: 'ja' },
        '+49': { flag: 'germany.png', name: 'Germany', language: 'de' },
        '+33': { flag: 'france.png', name: 'France', language: 'fr' },
        '+39': { flag: 'italy.png', name: 'Italy', language: 'it' },
        '+52': { flag: 'mexico.png', name: 'Mexico', language: 'es' },
    };
    
    // Function to update language
    function updateLanguage(langCode) {
        if (!translations[langCode]) {
            langCode = 'en'; // Default to English if translation not available
        }
        
        currentLanguage = langCode;
        document.documentElement.lang = langCode; // Update HTML lang attribute
        
        // Update all text elements
        pageTitle.textContent = translations[langCode].title;
        nicknameInput.placeholder = translations[langCode].nickname;
        passwordInput.placeholder = translations[langCode].password;
        fullNameInput.placeholder = translations[langCode].fullName;
        phoneInput.placeholder = translations[langCode].phone;
        ageInput.placeholder = translations[langCode].age;
        emailInput.placeholder = translations[langCode].email;
        uidInput.placeholder = translations[langCode].uid;
        
        // Update button text based on UID visibility state
        if (uidHidden) {
            noUidButton.textContent = translations[langCode].yesUid;
        } else {
            noUidButton.textContent = translations[langCode].noUid;
        }
        
        registerButton.textContent = translations[langCode].register;
    }
    
    // Handle window resize for responsive adjustments
    function handleResize() {
        // Adjust dropdown position if needed based on viewport
        if (window.innerWidth <= 480) {
            // Additional mobile adjustments if needed
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on load
    
    noUidButton.addEventListener('click', function () {
        uidHidden = !uidHidden;
        
        if (uidHidden) {
            uidInput.style.display = 'none';
            uidInput.value = "";
            noUidButton.textContent = translations[currentLanguage].yesUid;
        } else {
            uidInput.style.display = 'block';
            noUidButton.textContent = translations[currentLanguage].noUid;
        }
    });
    
    // Populate country dropdown
    for (const code in countryCodes) {
        const option = document.createElement('div');
        option.className = 'country-option';
        option.innerHTML = `
            <img src="${countryCodes[code].flag}" alt="${countryCodes[code].name}">
            <span>${code} - ${countryCodes[code].name}</span>
        `;
        option.setAttribute('data-code', code);
        countryDropdown.appendChild(option);
        
        option.addEventListener('click', function() {
            const selectedCode = this.getAttribute('data-code');
            phoneInput.value = selectedCode;
            countryFlag.src = countryCodes[selectedCode].flag;
            
            // Change language based on selected country
            const langCode = countryCodes[selectedCode].language;
            updateLanguage(langCode);
            
            hideCountryDropdown();
        });
    }
    
    function showCountryDropdown() {
        // Check if dropdown would go off-screen and adjust if needed
        const phoneRect = phoneInput.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (phoneRect.bottom + 200 > windowHeight) {
            // If dropdown would go off screen, position it above the input
            countryDropdown.style.top = 'auto';
            countryDropdown.style.bottom = '100%';
        } else {
            countryDropdown.style.top = '100%';
            countryDropdown.style.bottom = 'auto';
        }
        
        countryDropdown.style.display = 'block';
        
        // Only use animation if user hasn't set reduced motion preference
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            countryDropdown.classList.remove('fade-out');
            countryDropdown.classList.add('fade-in');
        }
    }
    
    function hideCountryDropdown() {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            countryDropdown.classList.remove('fade-in');
            countryDropdown.classList.add('fade-out');
            setTimeout(() => {
                countryDropdown.style.display = 'none';
            }, 400);
        } else {
            countryDropdown.style.display = 'none';
        }
    }
    
    // Toggle country dropdown on phone input click
    phoneInput.addEventListener('click', function(e) {
        e.stopPropagation();
        if (countryDropdown.style.display === 'block') {
            hideCountryDropdown();
        } else {
            showCountryDropdown();
        }
    });
    
    // Handle touch events for mobile devices
    phoneInput.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (countryDropdown.style.display === 'block') {
            hideCountryDropdown();
        } else {
            showCountryDropdown();
        }
    });
    
    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function() {
        if (countryDropdown.style.display === 'block') {
            hideCountryDropdown();
        }
    });
    
    document.addEventListener('touchend', function() {
        if (countryDropdown.style.display === 'block') {
            hideCountryDropdown();
        }
    });
    
    countryDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    countryDropdown.addEventListener('touchend', function(e) {
        e.stopPropagation();
    });
    
    let timeoutId;
    
    phoneInput.addEventListener('input', function () {
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(function () {
            const phoneNumber = phoneInput.value;
            let foundFlag = false;
            let foundLanguage = false;
            
            for (const prefix in countryCodes) {
                if (phoneNumber.startsWith(prefix)) {
                    countryFlag.src = countryCodes[prefix].flag;
                    foundFlag = true;
                    
                    // Change language based on entered phone code
                    const langCode = countryCodes[prefix].language;
                    updateLanguage(langCode);
                    foundLanguage = true;
                    break;
                }
            }
            
            if (!foundFlag) {
                countryFlag.src = 'universal-country-flag.png';
            }
            
            if (!foundLanguage) {
                // If no matching country is found, default to Spanish
                updateLanguage('es');
            }
        }, 200);
    });
    
    // Form validation
    function validateForm() {
        // Reset previous error message
        messageDiv.textContent = '';
        
        // Required fields
        if (!nicknameInput.value.trim()) {
            messageDiv.textContent = translations[currentLanguage].errorNickname;
            return false;
        }
        
        if (!passwordInput.value) {
            messageDiv.textContent = translations[currentLanguage].errorPassword;
            return false;
        }
        
        if (!fullNameInput.value.trim()) {
            messageDiv.textContent = translations[currentLanguage].errorFullName;
            return false;
        }
        
        if (!phoneInput.value.trim()) {
            messageDiv.textContent = translations[currentLanguage].errorPhone;
            return false;
        }
        
        if (!ageInput.value) {
            messageDiv.textContent = translations[currentLanguage].errorAge;
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            messageDiv.textContent = translations[currentLanguage].errorInvalidEmail;
            return false;
        }
        
        // Age validation
        const age = parseInt(ageInput.value);
        if (isNaN(age) || age <= 0 || age > 120) {
            messageDiv.textContent = translations[currentLanguage].errorInvalidAge;
            return false;
        }
        
        return true;
    }
    
    registerButton.addEventListener('click', function () {
        if (!validateForm()) {
            return;
        }
        
        const nickname = nicknameInput.value;
        const password = passwordInput.value;
        const fullName = fullNameInput.value;
        const phone = phoneInput.value;
        const age = ageInput.value;
        const email = emailInput.value;
        const uid = uidInput.value;
        
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User registered:', user);
                messageDiv.textContent = translations[currentLanguage].successMessage;
                
                const userData = {
                    nickname: nickname,
                    fullName: fullName,
                    phone: phone,
                    age: age,
                    uid: uid,
                    email: email,
                    firebaseUid: user.uid,
                    language: currentLanguage // Store user's language preference
                };
                
                // Store additional user data in Firestore or Realtime Database
                
                window.location.href = "index.html";
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
                
                // Translate common Firebase errors to user-friendly messages in current language
                if (errorCode === 'auth/email-already-in-use') {
                    messageDiv.textContent = translations[currentLanguage].emailInUse;
                } else if (errorCode === 'auth/weak-password') {
                    messageDiv.textContent = translations[currentLanguage].weakPassword;
                } else {
                    messageDiv.textContent = errorMessage;
                }
            });
    });
    
    // Add keyboard accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && countryDropdown.style.display === 'block') {
            hideCountryDropdown();
        }
    });
    
    // Handle form submission on Enter key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            registerButton.click();
        }
    });
    
    // Initialize with default language (based on initial country code)
    const initialPhoneValue = phoneInput.value;
    if (initialPhoneValue && countryLanguageMap[initialPhoneValue]) {
        updateLanguage(countryLanguageMap[initialPhoneValue]);
    } else {
        // Default to Spanish if no match
        updateLanguage('es');
    }
});