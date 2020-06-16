
let btn_upload = document.getElementById('btn-upload-csv').addEventListener('click', () => {
    let bigFile = 'arquivo.csv';
    let cursos = [];
    let generos = [];
    let cidades = [];
    let periodos = [];
    let estados = [];
    let idades = [];
    let estado_civil = [];
    let necessidade_especial = [];
    let qtde_filhos = [];
    let com_quem_mora = [];
    let qtde_pessoas_casa = [];
    let situacao_casa = [];
    let tempo_casa = [];
    let renda_familiar = [];
    let qtde_itens_tv = [];
    let qtde_itens_dvd = [];
    let qtde_itens_radio = [];
    let qtde_carros = [];
    let qtde_motos = [];
    let qtde_celular = [];
    let qtde_smartphone = [];
    let qtde_pc = [];
    let qtde_notebook = [];
    let qtde_telefone_casa = [];
    let internet_casa = [];
    let tv_assinatura_casa = [];
    let empregada_casa = [];
    let voce_trabalha = [];
    let vinculo_emprego = [];
    let area_trabalho = [];
    let plano_saude = [];
    let escolaridade_mae = [];
    let escolaridade_pai = [];
    let estudou_onde = [];
    let frequencia_pc = []
    let utiliza_casa = [];
    let utiliza_trabalho = [];
    let utiliza_escola = [];
    let utiliza_outros = [];
    let finalidade_pc_trabalho = [];
    let finalidade_pc_escola = [];
    let finalidade_pc_entreterimento = [];
    let finalidade_pc_email = [];
    let finalidade_pc_banco = [];
    let finalidade_pc_compras = [];
    let conhecimento_informatica = [];
    let conhecimento_windows = [];
    let conhecimento_linux = [];
    let conhecimento_editor_texto = [];
    let conhecimento_planilhas = [];
    let conhecimento_apresentadores = [];
    let conhecimento_gestao = [];
    let idioma_ingles = [];
    let idioma_espanhol = [];
    let idioma_outros = [];
    let info_tv = [];
    let info_internet = [];
    let info_revista = [];
    let info_radio = [];
    let info_rede_social = [];
    let info_amigos = [];
    let jornal = [];
    let jornal_assunto = [];
    let qtde_livro = [];
    let livro_genero = [];
    let atividade_voluntaria = [];
    let religiao = [];
    let entreterimento = [];
    let fatec = [];
    let motivo_curso = [];
    let expectativa_curso = [];
    let apos_formar = [];
    let ja_estudou = [];
    let curso_tecnico = [];
    let meio_transporte = [];
    let historia = [];
    let hoje = new Date();
    let anoAtual = hoje.getFullYear();
    Papa.parse(document.getElementById('upload-csv').files[0], {
        download: true,
        header: true,
        delimiter: ",",
        worker: true,
        step: function (results) {
            let row = results.data;
            let resp = row["2 - Qual o seu curso?"];
            var found = cursos.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    cursos.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = cursos.findIndex((item) => item.resposta === resp);
                    cursos[index].quantidade += 1;
                }
            }
            resp = row["3 - Qual o período em que cursa?"];
            var found = periodos.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    periodos.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = periodos.findIndex((item) => item.resposta === resp);
                    periodos[index].quantidade += 1;
                }
            }
            resp = row["4 - Qual o estado do Brasil em que você nasceu?"];
            var found = estados.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    estados.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = estados.findIndex((item) => item.resposta === resp);
                    estados[index].quantidade += 1;
                }
            }
            resp = row["6 - Qual o seu gênero?"];
            var found = generos.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    generos.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = generos.findIndex((item) => item.resposta === resp);
                    generos[index].quantidade += 1;
                }
            }
            resp = row["7 - Qual a sua data de nascimento?"];
            var idade = anoAtual - resp.slice(0, 4);
            var found = idades.some((elemento) => {
                return elemento.resposta === idade;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    idades.push({ resposta: idade, quantidade: 1 });
                } else {
                    const index = idades.findIndex((item) => item.resposta === idade);
                    idades[index].quantidade += 1;
                }
            }

            resp = row["5 - Qual a sua cidade de residência?"];
            var found = cidades.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    cidades.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = cidades.findIndex((item) => item.resposta === resp);
                    cidades[index].quantidade += 1;
                }
            }
            resp = row["8 - Qual é o seu estado civil?"];
            var found = estado_civil.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    estado_civil.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = estado_civil.findIndex((item) => item.resposta === resp);
                    estado_civil[index].quantidade += 1;
                }
            }
            resp = row["9 - Você é portador de alguma necessidade especial?"];
            respostas = resp.split(';');
            respostas.forEach((resposta) => {
                var found = necessidade_especial.some((elemento) => {
                    return elemento.resposta === resposta;
                });
                if (typeof resp !== "undefined") {
                    if (!found) {
                        necessidade_especial.push({ resposta: resposta, quantidade: 1 });
                    } else {
                        const index = necessidade_especial.findIndex((item) => item.resposta === resposta);
                        necessidade_especial[index].quantidade += 1;
                    }
                }
            });
            resp = row["10 - Quantos filhos você têm?"];
            var found = qtde_filhos.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_filhos.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_filhos.findIndex((item) => item.resposta === resp);
                    qtde_filhos[index].quantidade += 1;
                }
            }
            resp = row["11 - Com quem você mora atualmente?"];
            var found = com_quem_mora.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    com_quem_mora.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = com_quem_mora.findIndex((item) => item.resposta === resp);
                    com_quem_mora[index].quantidade += 1;
                }
            }
            resp = row["12- Quantas pessoas, incluindo você, moram no seu domicílio?"];
            var found = qtde_pessoas_casa.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_pessoas_casa.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_pessoas_casa.findIndex((item) => item.resposta === resp);
                    qtde_pessoas_casa[index].quantidade += 1;
                }
            }
            resp = row["13 - Qual a situação do domicílio onde mora?"];
            var found = situacao_casa.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    situacao_casa.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = situacao_casa.findIndex((item) => item.resposta === resp);
                    situacao_casa[index].quantidade += 1;
                }
            }
            resp = row["14 - Há quanto tempo você mora neste domicílio?"];
            var found = tempo_casa.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    tempo_casa.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = tempo_casa.findIndex((item) => item.resposta === resp);
                    tempo_casa[index].quantidade += 1;
                }
            }
            resp = row["15 - Qual a faixa de renda mensal da sua família (em Salários Mínimos)?"];
            var found = renda_familiar.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    renda_familiar.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = renda_familiar.findIndex((item) => item.resposta === resp);
                    renda_familiar[index].quantidade += 1;
                }
            }
            resp = row["16 - Quantos de cada um dos itens abaixo há em seu domicílio? [Televisores]"];
            var found = qtde_itens_tv.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_itens_tv.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_itens_tv.findIndex((item) => item.resposta === resp);
                    qtde_itens_tv[index].quantidade += 1;
                }
            }
            resp = row["16 - Quantos de cada um dos itens abaixo há em seu domicílio? [Video cassete e/ou DVD]"];
            var found = qtde_itens_dvd.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_itens_dvd.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_itens_dvd.findIndex((item) => item.resposta === resp);
                    qtde_itens_dvd[index].quantidade += 1;
                }
            }
            resp = row["16 - Quantos de cada um dos itens abaixo há em seu domicílio? [Rádio]"];
            var found = qtde_itens_radio.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_itens_radio.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_itens_radio.findIndex((item) => item.resposta === resp);
                    qtde_itens_radio[index].quantidade += 1;
                }
            }
            resp = row["16 - Quantos de cada um dos itens abaixo há em seu domicílio? [Automóveis]"];
            var found = qtde_carros.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_carros.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_carros.findIndex((item) => item.resposta === resp);
                    qtde_carros[index].quantidade += 1;
                }
            }
            resp = row["16 - Quantos de cada um dos itens abaixo há em seu domicílio? [Motocicleta]"];
            var found = qtde_motos.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_motos.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_motos.findIndex((item) => item.resposta === resp);
                    qtde_motos[index].quantidade += 1;
                }
            }
            resp = row["16 - Quantos de cada um dos itens abaixo há em seu domicílio? [Celular comum]"];
            var found = qtde_celular.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_celular.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_celular.findIndex((item) => item.resposta === resp);
                    qtde_celular[index].quantidade += 1;
                }
            }
            resp = row["16 - Quantos de cada um dos itens abaixo há em seu domicílio? [Smartphone]"];
            var found = qtde_smartphone.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_smartphone.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_smartphone.findIndex((item) => item.resposta === resp);
                    qtde_smartphone[index].quantidade += 1;
                }
            }
            resp = row["16 - Quantos de cada um dos itens abaixo há em seu domicílio? [Microcomputador de mesa]"];
            var found = qtde_pc.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_pc.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_pc.findIndex((item) => item.resposta === resp);
                    qtde_pc[index].quantidade += 1;
                }
            }
            resp = row["16 - Quantos de cada um dos itens abaixo há em seu domicílio? [Notebook]"];
            var found = qtde_notebook.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_notebook.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_notebook.findIndex((item) => item.resposta === resp);
                    qtde_notebook[index].quantidade += 1;
                }
            }
            resp = row["17 - Em seu domicílio você possui: [Telefone]"];
            var found = qtde_telefone_casa.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_telefone_casa.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_telefone_casa.findIndex((item) => item.resposta === resp);
                    qtde_telefone_casa[index].quantidade += 1;
                }
            }
            resp = row["17 - Em seu domicílio você possui: [Internet]"];
            var found = internet_casa.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    internet_casa.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = internet_casa.findIndex((item) => item.resposta === resp);
                    internet_casa[index].quantidade += 1;
                }
            }
            resp = row["17 - Em seu domicílio você possui: [TV por assinatura]"];
            var found = tv_assinatura_casa.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    tv_assinatura_casa.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = tv_assinatura_casa.findIndex((item) => item.resposta === resp);
                    tv_assinatura_casa[index].quantidade += 1;
                }
            }
            resp = row["17 - Em seu domicílio você possui: [Empregada Mensalista]"];
            var found = empregada_casa.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    empregada_casa.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = empregada_casa.findIndex((item) => item.resposta === resp);
                    empregada_casa[index].quantidade += 1;
                }
            }
            resp = row["18.1 - Vamos tratar sobre trabalho agora: [Você trabalha?]"];
            var found = voce_trabalha.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    voce_trabalha.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = voce_trabalha.findIndex((item) => item.resposta === resp);
                    voce_trabalha[index].quantidade += 1;
                }
            }
            resp = row["18.2 - Qual é o seu vinculo com o emprego?"];
            var found = vinculo_emprego.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    vinculo_emprego.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = vinculo_emprego.findIndex((item) => item.resposta === resp);
                    vinculo_emprego[index].quantidade += 1;
                }
            }
            resp = row["18.3 - Qual a área do seu trabalho?"];
            var found = area_trabalho.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    area_trabalho.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = area_trabalho.findIndex((item) => item.resposta === resp);
                    area_trabalho[index].quantidade += 1;
                }
            }
            resp = row["19 - Você tem plano de saúde privado?"];
            var found = plano_saude.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    plano_saude.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = plano_saude.findIndex((item) => item.resposta === resp);
                    plano_saude[index].quantidade += 1;
                }
            }
            resp = row["20.1 - Vamos considerar a escolaridade da família. Qual a escolaridade da sua mãe?"];
            var found = escolaridade_mae.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    escolaridade_mae.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = escolaridade_mae.findIndex((item) => item.resposta === resp);
                    escolaridade_mae[index].quantidade += 1;
                }
            }
            resp = row["20.2 - E qual a escolaridade do seu pai?"];
            var found = escolaridade_pai.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    escolaridade_pai.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = escolaridade_pai.findIndex((item) => item.resposta === resp);
                    escolaridade_pai[index].quantidade += 1;
                }
            }
            resp = row["21 - Na sua vida escolar você estudou?"];
            var found = estudou_onde.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    estudou_onde.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = estudou_onde.findIndex((item) => item.resposta === resp);
                    estudou_onde[index].quantidade += 1;
                }
            }
            resp = row["22.1 -  Vamos tratar sobre uso de microcomputadores? [Com que frequência você utiliza microcomputadores ]"];
            var found = frequencia_pc.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    frequencia_pc.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = frequencia_pc.findIndex((item) => item.resposta === resp);
                    frequencia_pc[index].quantidade += 1;
                }
            }
            resp = row["22.2 - Onde você utiliza microcomputadores? [Em casa]"];
            var found = utiliza_casa.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    utiliza_casa.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = utiliza_casa.findIndex((item) => item.resposta === resp);
                    utiliza_casa[index].quantidade += 1;
                }
            }
            resp = row["22.2 - Onde você utiliza microcomputadores? [No trabalho]"];
            var found = utiliza_trabalho.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    utiliza_trabalho.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = utiliza_trabalho.findIndex((item) => item.resposta === resp);
                    utiliza_trabalho[index].quantidade += 1;
                }
            }
            resp = row["22.2 - Onde você utiliza microcomputadores? [Na escola]"];
            var found = utiliza_escola.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    utiliza_escola.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = utiliza_escola.findIndex((item) => item.resposta === resp);
                    utiliza_escola[index].quantidade += 1;
                }
            }
            resp = row["22.2 - Onde você utiliza microcomputadores? [Em outros lugares]"];
            var found = utiliza_outros.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    utiliza_outros.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = utiliza_outros.findIndex((item) => item.resposta === resp);
                    utiliza_outros[index].quantidade += 1;
                }
            }
            resp = row["22.3 - Com qual finalidade você utiliza  microcomputadores? [Para trabalhos profissionais]"];
            var found = finalidade_pc_trabalho.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    finalidade_pc_trabalho.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = finalidade_pc_trabalho.findIndex((item) => item.resposta === resp);
                    finalidade_pc_trabalho[index].quantidade += 1;
                }
            }
            resp = row["22.3 - Com qual finalidade você utiliza  microcomputadores? [Para trabalhos escolares]"];
            var found = finalidade_pc_escola.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    finalidade_pc_escola.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = finalidade_pc_escola.findIndex((item) => item.resposta === resp);
                    finalidade_pc_escola[index].quantidade += 1;
                }
            }
            resp = row["22.3 - Com qual finalidade você utiliza  microcomputadores? [Para entretenimento]"];
            var found = finalidade_pc_entreterimento.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    finalidade_pc_entreterimento.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = finalidade_pc_entreterimento.findIndex((item) => item.resposta === resp);
                    finalidade_pc_entreterimento[index].quantidade += 1;
                }
            }
            resp = row["22.3 - Com qual finalidade você utiliza  microcomputadores? [Para comunicação por e-mail]"];
            var found = finalidade_pc_email.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    finalidade_pc_email.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = finalidade_pc_email.findIndex((item) => item.resposta === resp);
                    finalidade_pc_email[index].quantidade += 1;
                }
            }
            resp = row["22.3 - Com qual finalidade você utiliza  microcomputadores? [Para operações bancárias]"];
            var found = finalidade_pc_banco.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    finalidade_pc_banco.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = finalidade_pc_banco.findIndex((item) => item.resposta === resp);
                    finalidade_pc_banco[index].quantidade += 1;
                }
            }
            resp = row["22.3 - Com qual finalidade você utiliza  microcomputadores? [Para Compras eletrônicas]"];
            var found = finalidade_pc_compras.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    finalidade_pc_compras.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = finalidade_pc_compras.findIndex((item) => item.resposta === resp);
                    finalidade_pc_compras[index].quantidade += 1;
                }
            }
            resp = row["23 - Como você classifica  seu conhecimento em  informática?"];
            var found = conhecimento_informatica.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    conhecimento_informatica.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = conhecimento_informatica.findIndex((item) => item.resposta === resp);
                    conhecimento_informatica[index].quantidade += 1;
                }
            }
            resp = row["24 - Qual o seu conhecimento em relações aos aplicativos a seguir?   [Windows]"];
            var found = conhecimento_windows.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    conhecimento_windows.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = conhecimento_windows.findIndex((item) => item.resposta === resp);
                    conhecimento_windows[index].quantidade += 1;
                }
            }
            resp = row["24 - Qual o seu conhecimento em relações aos aplicativos a seguir?   [Linux]"];
            var found = conhecimento_linux.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    conhecimento_linux.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = conhecimento_linux.findIndex((item) => item.resposta === resp);
                    conhecimento_linux[index].quantidade += 1;
                }
            }
            resp = row["24 - Qual o seu conhecimento em relações aos aplicativos a seguir?   [Editores de textos (Word, Writer, etc.)]"];
            var found = conhecimento_editor_texto.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    conhecimento_editor_texto.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = conhecimento_editor_texto.findIndex((item) => item.resposta === resp);
                    conhecimento_editor_texto[index].quantidade += 1;
                }
            }
            resp = row["24 - Qual o seu conhecimento em relações aos aplicativos a seguir?   [ Planilhas eletrônicas (Excel, Calc, etc.)]"];
            var found = conhecimento_planilhas.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    conhecimento_planilhas.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = conhecimento_planilhas.findIndex((item) => item.resposta === resp);
                    conhecimento_planilhas[index].quantidade += 1;
                }
            }
            resp = row["24 - Qual o seu conhecimento em relações aos aplicativos a seguir?   [Apresentadores (PowerPoint, Impress, Prezzi, etc.)]"];
            var found = conhecimento_apresentadores.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    conhecimento_apresentadores.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = conhecimento_apresentadores.findIndex((item) => item.resposta === resp);
                    conhecimento_apresentadores[index].quantidade += 1;
                }
            }
            resp = row["24 - Qual o seu conhecimento em relações aos aplicativos a seguir?   [Sistemas de Gestão Empresarial]"];
            var found = conhecimento_gestao.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    conhecimento_gestao.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = conhecimento_gestao.findIndex((item) => item.resposta === resp);
                    conhecimento_gestao[index].quantidade += 1;
                }
            }
            resp = row["25 -  Agora, considere seu conhecimento sobre idioma: [Inglês]"];
            var found = idioma_ingles.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    idioma_ingles.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = idioma_ingles.findIndex((item) => item.resposta === resp);
                    idioma_ingles[index].quantidade += 1;
                }
            }
            resp = row["25 -  Agora, considere seu conhecimento sobre idioma: [Espanhol]"];
            var found = idioma_espanhol.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    idioma_espanhol.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = idioma_espanhol.findIndex((item) => item.resposta === resp);
                    idioma_espanhol[index].quantidade += 1;
                }
            }
            resp = row["25 -  Agora, considere seu conhecimento sobre idioma: [Outros idiomas]"];
            var found = idioma_outros.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    idioma_outros.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = idioma_outros.findIndex((item) => item.resposta === resp);
                    idioma_outros[index].quantidade += 1;
                }
            }
            resp = row["26 - Considere a busca por informações nos seguintes meios de comunicação: [TV]"];
            var found = info_tv.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    info_tv.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = info_tv.findIndex((item) => item.resposta === resp);
                    info_tv[index].quantidade += 1;
                }
            }
            resp = row["26 - Considere a busca por informações nos seguintes meios de comunicação: [Internet]"];
            var found = info_internet.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    info_internet.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = info_internet.findIndex((item) => item.resposta === resp);
                    info_internet[index].quantidade += 1;
                }
            }
            resp = row["26 - Considere a busca por informações nos seguintes meios de comunicação: [Revista]"];
            var found = info_revista.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    info_revista.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = info_revista.findIndex((item) => item.resposta === resp);
                    info_revista[index].quantidade += 1;
                }
            }
            resp = row["26 - Considere a busca por informações nos seguintes meios de comunicação: [Rádio]"];
            var found = info_radio.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    info_radio.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = info_radio.findIndex((item) => item.resposta === resp);
                    info_radio[index].quantidade += 1;
                }
            }
            resp = row["26 - Considere a busca por informações nos seguintes meios de comunicação: [Redes sociais]"];
            var found = info_rede_social.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    info_rede_social.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = info_rede_social.findIndex((item) => item.resposta === resp);
                    info_rede_social[index].quantidade += 1;
                }
            }
            resp = row["26 - Considere a busca por informações nos seguintes meios de comunicação: [Conversa com amigos]"];
            var found = info_amigos.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    info_amigos.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = info_amigos.findIndex((item) => item.resposta === resp);
                    info_amigos[index].quantidade += 1;
                }
            }
            resp = row["27 -  Com qual frequência você lê jornais?"];
            var found = jornal.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    jornal.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = jornal.findIndex((item) => item.resposta === resp);
                    jornal[index].quantidade += 1;
                }
            }

            resp = row["28 - Se você lê jornal, quais os assuntos que mais lê?"];
            respostas = resp.split(';');
            respostas.forEach((resposta) => {
                var found = jornal_assunto.some((elemento) => {
                    return elemento.resposta === resposta;
                });
                if (typeof resp !== "undefined") {
                    if (!found) {
                        jornal_assunto.push({ resposta: resposta, quantidade: 1 });
                    } else {
                        const index = jornal_assunto.findIndex((item) => item.resposta === resposta);
                        jornal_assunto[index].quantidade += 1;
                    }
                }
            });

            resp = row["29 - Não considerando os livros escolares, quantos livros você lê por ano (em média)?"];
            var found = qtde_livro.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    qtde_livro.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = qtde_livro.findIndex((item) => item.resposta === resp);
                    qtde_livro[index].quantidade += 1;
                }
            }
            resp = row["30 - Se você lê livros literários, qual gênero preferido?"];
            var found = livro_genero.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    livro_genero.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = livro_genero.findIndex((item) => item.resposta === resp);
                    livro_genero[index].quantidade += 1;
                }
            }
            resp = row["31 - Você dedica parte do seu tempo para atividades voluntárias?"];
            var found = atividade_voluntaria.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    atividade_voluntaria.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = atividade_voluntaria.findIndex((item) => item.resposta === resp);
                    atividade_voluntaria[index].quantidade += 1;
                }
            }
            resp = row["32 - Qual religião você professa?"];
            var found = religiao.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    religiao.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = religiao.findIndex((item) => item.resposta === resp);
                    religiao[index].quantidade += 1;
                }
            }

            resp = row["33 - Quais fontes de entretenimento cultural você usa?"];
            respostas = resp.split(';');
            respostas.forEach((resposta) => {
                var found = entreterimento.some((elemento) => {
                    return elemento.resposta === resposta;
                });
                if (typeof resp !== "undefined") {
                    if (!found) {
                        entreterimento.push({ resposta: resposta, quantidade: 1 });
                    } else {
                        const index = entreterimento.findIndex((item) => item.resposta === resposta);
                        entreterimento[index].quantidade += 1;
                    }
                }
            });

            resp = row["34 - Estamos quase acabando... Como conheceu a FATEC Franca?"];
            var found = fatec.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    fatec.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = fatec.findIndex((item) => item.resposta === resp);
                    fatec[index].quantidade += 1;
                }
            }
            resp = row["35 - Porque você escolheu este curso?"];
            var found = motivo_curso.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    motivo_curso.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = motivo_curso.findIndex((item) => item.resposta === resp);
                    motivo_curso[index].quantidade += 1;
                }
            }
            resp = row["36 - Qual sua maior expectativa quanto ao curso?"];
            var found = expectativa_curso.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    expectativa_curso.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = expectativa_curso.findIndex((item) => item.resposta === resp);
                    expectativa_curso[index].quantidade += 1;
                }
            }
            resp = row["37 - Qual sua expectativa após se formar?"];
            var found = apos_formar.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    apos_formar.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = apos_formar.findIndex((item) => item.resposta === resp);
                    apos_formar[index].quantidade += 1;
                }
            }
            resp = row["38 - Você já estudou nesta instituição?"];
            var found = ja_estudou.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    ja_estudou.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = ja_estudou.findIndex((item) => item.resposta === resp);
                    ja_estudou[index].quantidade += 1;
                }
            }
            resp = row["39 - Você fez algum curso técnico?"];
            var found = curso_tecnico.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    curso_tecnico.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = curso_tecnico.findIndex((item) => item.resposta === resp);
                    curso_tecnico[index].quantidade += 1;
                }
            }
            resp = row["40 - Qual o meio de transporte você usa para vir à faculdade?"];
            var found = meio_transporte.some((elemento) => {
                return elemento.resposta === resp;
            });
            if (typeof resp !== "undefined") {
                if (!found) {
                    meio_transporte.push({ resposta: resp, quantidade: 1 });
                } else {
                    const index = meio_transporte.findIndex((item) => item.resposta === resp);
                    meio_transporte[index].quantidade += 1;
                }
            }
            resp = row["41 - Escreva em algumas linhas sobre sua história e seus sonhos de vida."];
            if (typeof resp !== "undefined") {
                historia.push({ resposta: resp });
            }
        },
        complete: function () {

            qtde_filhos.sort((a, b) => {
                if (a.resposta > b.resposta) {
                    return 1
                }
                else {
                    return -1
                }
            });
            qtde_itens_dvd.sort((a, b) => a.resposta - b.resposta);
            qtde_itens_tv.sort((a, b) => {
                if (a.resposta > b.resposta) {
                    return 1
                }
                else {
                    return -1
                }
            });

            qtde_itens_radio.sort((a, b) => {
                if (a.resposta > b.resposta) {
                    return 1
                }
                else {
                    return -1
                }
            });

            qtde_carros.sort((a, b) => {
                if (a.resposta > b.resposta) {
                    return 1
                }
                else {
                    return -1
                }
            });
            qtde_smartphone.sort((a, b) => {
                if (a.resposta > b.resposta) {
                    return 1
                }
                else {
                    return -1
                }
            });
            qtde_notebook.sort((a, b) => {
                if (a.resposta > b.resposta) {
                    return 1
                }
                else {
                    return -1
                }
            });

            idades.sort((a, b) => a.resposta - b.resposta);
            qtde_filhos.sort((a, b) => a.resposta - b.resposta);
            qtde_pc.sort((a, b) => a.resposta - b.resposta);
            qtde_celular.sort((a, b) => a.resposta - b.resposta);
            qtde_smartphone.sort((a, b) => a.resposta - b.resposta);
            qtde_notebook.sort((a, b) => a.resposta - b.resposta);
            document.getElementById('cursos').innerHTML = Papa.unparse(cursos);
            document.getElementById('generos').innerHTML = Papa.unparse(generos);
            document.getElementById('cidades').innerHTML = Papa.unparse(cidades);
            document.getElementById('periodos').innerHTML = Papa.unparse(periodos);
            document.getElementById('estados').innerHTML = Papa.unparse(estados);
            document.getElementById('idades').innerHTML = Papa.unparse(idades);
            document.getElementById('estado_civil').innerHTML = Papa.unparse(estado_civil);
            document.getElementById('necessidade_especial').innerHTML = Papa.unparse(necessidade_especial);
            document.getElementById('qtde_filhos').innerHTML = Papa.unparse(qtde_filhos);
            document.getElementById('com_quem_mora').innerHTML = Papa.unparse(com_quem_mora);
            document.getElementById('qtde_pessoas_casa').innerHTML = Papa.unparse(qtde_pessoas_casa);
            document.getElementById('situacao_casa').innerHTML = Papa.unparse(situacao_casa);
            document.getElementById('tempo_casa').innerHTML = Papa.unparse(tempo_casa);
            document.getElementById('renda_familiar').innerHTML = Papa.unparse(renda_familiar);
            document.getElementById('qtde_itens_tv').innerHTML = Papa.unparse(qtde_itens_tv);
            document.getElementById('qtde_itens_dvd').innerHTML = Papa.unparse(qtde_itens_dvd);
            document.getElementById('qtde_itens_radio').innerHTML = Papa.unparse(qtde_itens_radio);
            document.getElementById('qtde_carros').innerHTML = Papa.unparse(qtde_carros);
            document.getElementById('qtde_motos').innerHTML = Papa.unparse(qtde_motos);
            document.getElementById('qtde_celular').innerHTML = Papa.unparse(qtde_celular);
            document.getElementById('qtde_smartphone').innerHTML = Papa.unparse(qtde_smartphone);
            document.getElementById('qtde_pc').innerHTML = Papa.unparse(qtde_pc);
            document.getElementById('qtde_notebook').innerHTML = Papa.unparse(qtde_notebook);
            document.getElementById('qtde_telefone_casa').innerHTML = Papa.unparse(qtde_telefone_casa);
            document.getElementById('internet_casa').innerHTML = Papa.unparse(internet_casa);
            document.getElementById('tv_assinatura_casa').innerHTML = Papa.unparse(tv_assinatura_casa);
            document.getElementById('empregada_casa').innerHTML = Papa.unparse(empregada_casa);
            document.getElementById('voce_trabalha').innerHTML = Papa.unparse(voce_trabalha);
            document.getElementById('vinculo_emprego').innerHTML = Papa.unparse(vinculo_emprego);
            document.getElementById('area_trabalho').innerHTML = Papa.unparse(area_trabalho);
            document.getElementById('plano_saude').innerHTML = Papa.unparse(plano_saude);
            document.getElementById('escolaridade_mae').innerHTML = Papa.unparse(escolaridade_mae);
            document.getElementById('escolaridade_pai').innerHTML = Papa.unparse(escolaridade_pai);
            document.getElementById('estudou_onde').innerHTML = Papa.unparse(estudou_onde);
            document.getElementById('frequencia_pc').innerHTML = Papa.unparse(frequencia_pc);
            document.getElementById('utiliza_casa').innerHTML = Papa.unparse(utiliza_casa);
            document.getElementById('utiliza_trabalho').innerHTML = Papa.unparse(utiliza_trabalho);
            document.getElementById('utiliza_escola').innerHTML = Papa.unparse(utiliza_escola);
            document.getElementById('utiliza_outros').innerHTML = Papa.unparse(utiliza_outros);
            document.getElementById('finalidade_pc_trabalho').innerHTML = Papa.unparse(finalidade_pc_trabalho);
            document.getElementById('finalidade_pc_escola').innerHTML = Papa.unparse(finalidade_pc_escola);
            document.getElementById('finalidade_pc_entreterimento').innerHTML = Papa.unparse(finalidade_pc_entreterimento);
            document.getElementById('finalidade_pc_email').innerHTML = Papa.unparse(finalidade_pc_email);
            document.getElementById('finalidade_pc_banco').innerHTML = Papa.unparse(finalidade_pc_banco);
            document.getElementById('finalidade_pc_compras').innerHTML = Papa.unparse(finalidade_pc_compras);
            document.getElementById('conhecimento_informatica').innerHTML = Papa.unparse(conhecimento_informatica);
            document.getElementById('conhecimento_windows').innerHTML = Papa.unparse(conhecimento_windows);
            document.getElementById('conhecimento_linux').innerHTML = Papa.unparse(conhecimento_linux);
            document.getElementById('conhecimento_editor_texto').innerHTML = Papa.unparse(conhecimento_editor_texto);
            document.getElementById('conhecimento_planilhas').innerHTML = Papa.unparse(conhecimento_planilhas);
            document.getElementById('conhecimento_apresentadores').innerHTML = Papa.unparse(conhecimento_apresentadores);
            document.getElementById('conhecimento_gestao').innerHTML = Papa.unparse(conhecimento_gestao);
            document.getElementById('idioma_ingles').innerHTML = Papa.unparse(idioma_ingles);
            document.getElementById('idioma_espanhol').innerHTML = Papa.unparse(idioma_espanhol);
            document.getElementById('idioma_outros').innerHTML = Papa.unparse(idioma_outros);
            document.getElementById('info_tv').innerHTML = Papa.unparse(info_tv);
            document.getElementById('info_internet').innerHTML = Papa.unparse(info_internet);
            document.getElementById('info_revista').innerHTML = Papa.unparse(info_revista);
            document.getElementById('info_radio').innerHTML = Papa.unparse(info_radio);
            document.getElementById('info_rede_social').innerHTML = Papa.unparse(info_rede_social);
            document.getElementById('info_amigos').innerHTML = Papa.unparse(info_amigos);
            document.getElementById('jornal').innerHTML = Papa.unparse(jornal);
            document.getElementById('jornal_assunto').innerHTML = Papa.unparse(jornal_assunto);
            document.getElementById('qtde_livro').innerHTML = Papa.unparse(qtde_livro);
            document.getElementById('livro_genero').innerHTML = Papa.unparse(livro_genero);
            document.getElementById('atividade_voluntaria').innerHTML = Papa.unparse(atividade_voluntaria);
            document.getElementById('religiao').innerHTML = Papa.unparse(religiao);
            document.getElementById('entreterimento').innerHTML = Papa.unparse(entreterimento);
            document.getElementById('fatec').innerHTML = Papa.unparse(fatec);
            document.getElementById('motivo_curso').innerHTML = Papa.unparse(motivo_curso);
            document.getElementById('expectativa_curso').innerHTML = Papa.unparse(expectativa_curso);
            document.getElementById('apos_formar').innerHTML = Papa.unparse(apos_formar);
            document.getElementById('ja_estudou').innerHTML = Papa.unparse(ja_estudou);
            document.getElementById('curso_tecnico').innerHTML = Papa.unparse(curso_tecnico);
            document.getElementById('meio_transporte').innerHTML = Papa.unparse(meio_transporte);
            gerarListaResposta(historia);
            document.getElementById("botoes").style.display = 'block';
        }
    });
});


function gerarGrafico(tipo) {
    document.getElementById("div_respostas").style.display = 'none';
    document.getElementById("container").style.display = 'block';
    Highcharts.chart('container', {
        title: {
            text: 'Questionário'
        },
        subtitle: {
            text: 'Respostas da pergunta'
        },
        data: {
            csv: document.getElementById(tipo).innerHTML
        },

        yAxis: {
            title: {
                text: 'Valores'
            }
        },

        xAxis: {
            type: 'category',
        },


        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
                groupPadding: 0,
                shadow: false
            },
            series: {
                marker: {
                    enabled: false
                }
            }
        },

        series: [{
            type: 'column',
            colorByPoint: true,
            colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
            //color: '#c4592d',
            //negativeColor: '#5679c4',
            fillOpacity: 0.5
        }]
    });
}

function gerarListaResposta(respostas) {
    const lista = document.getElementById("listaRespostas");

    respostas.forEach((elemento) => {
        let item = document.createElement('li');
        item.innerHTML = elemento.resposta;
        lista.appendChild(item);
    });
}

function exibirListaResposta() {
    document.getElementById("container").style.display = 'none';
    document.getElementById("div_respostas").style.display = 'block';
}
