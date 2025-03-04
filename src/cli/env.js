const parseEnv = () => {
    const envVariables = Object.keys(process.env);
    const mitsoVariables = envVariables
        .filter(key => key.startsWith('MITSO_'))
        .map(key => `${key}=${process.env[key]}`)
        .join('; ');
    console.log(mitsoVariables);
};

parseEnv();
