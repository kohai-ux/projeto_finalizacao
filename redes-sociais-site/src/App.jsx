import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Users, 
  TrendingUp, 
  Heart, 
  MessageCircle, 
  Share2, 
  Globe, 
  DollarSign, 
  Vote,
  Brain,
  Shield,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'
import './App.css'

// Importando as imagens
import homeBanner from './assets/home_page_banner.png'
import politicaImage from './assets/politica_ativismo.png'
import economiaImage from './assets/economia_influencia.png'
import socialImage from './assets/social_saude_mental.png'
import infograficoEstatisticas from './assets/infografico_estatisticas.png'
import infograficoImpactos from './assets/infografico_impactos.png'
import infograficoEsferas from './assets/infografico_esferas.png'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = [
    { id: 'home', title: 'Início', icon: Globe },
    { id: 'politica', title: 'Política', icon: Vote },
    { id: 'economia', title: 'Economia', icon: DollarSign },
    { id: 'social', title: 'Social', icon: Heart },
    { id: 'referencias', title: 'Referências', icon: Brain },
    { id: 'sobre', title: 'Sobre', icon: Users }
  ]

  const renderHome = () => (
    <div className="space-y-8">
      <div className="relative h-96 rounded-lg overflow-hidden">
        <img 
          src={homeBanner} 
          alt="Conexão Global" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">O Impacto das Redes Sociais na Sociedade Contemporânea</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Explorando como as redes sociais transformam a participação cidadã e a construção da sociedade 
              nas esferas política, econômica e social
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveSection('politica')}>
          <CardHeader>
            <Vote className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>Esfera Política</CardTitle>
            <CardDescription>
              Democratização do acesso à informação e mobilização social
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveSection('economia')}>
          <CardHeader>
            <DollarSign className="h-8 w-8 text-green-600 mb-2" />
            <CardTitle>Esfera Econômica</CardTitle>
            <CardDescription>
              Novas oportunidades de negócio e transformação do mercado
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setActiveSection('social')}>
          <CardHeader>
            <Heart className="h-8 w-8 text-red-600 mb-2" />
            <CardTitle>Esfera Social</CardTitle>
            <CardDescription>
              Conexões humanas e impactos na saúde mental
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Introdução</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            As redes sociais se tornaram uma parte intrínseca da vida moderna, transformando a maneira como nos 
            comunicamos, interagimos e acessamos informações. No entanto, essa onipresença levanta questões cruciais 
            sobre sua influência na participação cidadã e na construção da sociedade em suas esferas política, 
            econômica e social. Este site explora os múltiplos impactos das redes sociais, analisando seus pontos 
            positivos e negativos e sua contribuição para a formação de uma nova dinâmica social.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vídeo Explicativo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/nj22l1gIll8"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Estatísticas das Redes Sociais</CardTitle>
          </CardHeader>
          <CardContent>
            <img 
              src={infograficoEstatisticas} 
              alt="Estatísticas das Redes Sociais" 
              className="w-full h-auto rounded-lg"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Impactos Positivos e Negativos</CardTitle>
          </CardHeader>
          <CardContent>
            <img 
              src={infograficoImpactos} 
              alt="Impactos das Redes Sociais" 
              className="w-full h-auto rounded-lg"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Três Esferas de Impacto</CardTitle>
          </CardHeader>
          <CardContent>
            <img 
              src={infograficoEsferas} 
              alt="Esferas de Impacto" 
              className="w-full h-auto rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderPolitica = () => (
    <div className="space-y-8">
      <div className="relative h-64 rounded-lg overflow-hidden">
        <img 
          src={politicaImage} 
          alt="Ativismo Digital" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white">Redes Sociais e a Transformação da Política</h2>
        </div>
      </div>

      <Tabs defaultValue="positivos" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="positivos">Pontos Positivos</TabsTrigger>
          <TabsTrigger value="negativos">Pontos Negativos</TabsTrigger>
          <TabsTrigger value="contribuicao">Contribuição</TabsTrigger>
        </TabsList>

        <TabsContent value="positivos" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle className="text-2xl text-green-700">Democratização da Informação</CardTitle>
              </CardHeader>
              <CardContent>
                <p>As redes sociais democratizaram o acesso à informação e ao debate político, permitindo que vozes antes marginalizadas sejam ouvidas.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle className="text-2xl text-green-700">Mobilização Social</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Facilitam a mobilização social e o ativismo cívico, como visto em movimentos globais que se organizam através dessas plataformas.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle className="text-2xl text-green-700">Aproximação Política</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Aproximam representantes políticos e cidadãos, possibilitando comunicação mais direta e transparente.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle className="text-2xl text-green-700">Prestação de Contas</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Oferecem um canal para feedback e prestação de contas entre governo e sociedade civil.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="negativos" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <AlertTriangle className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle className="text-xl text-red-700">Desinformação</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A propagação de fake news e discursos de ódio são preocupações crescentes, minando a confiança pública.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <AlertTriangle className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle className="text-xl text-red-700">Polarização</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A formação de 'bolhas ideológicas' dificulta o diálogo construtivo e exacerba a polarização política.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <AlertTriangle className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle className="text-xl text-red-700">Manipulação</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Risco de manipulação da opinião pública e interferência em processos eleitorais.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <AlertTriangle className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle className="text-xl text-red-700">Uso Indevido de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Escândalos de uso indevido de dados e campanhas de desinformação comprometem a integridade democrática.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contribuicao">
          <Card>
            <CardHeader>
              <CardTitle>Contribuição para a Sociedade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                As redes sociais redefiniram a participação cidadã e a arena política. Elas empoderam os indivíduos 
                ao lhes dar uma plataforma para expressar suas opiniões e se engajar em questões cívicas.
              </p>
              <p>
                No entanto, também impõem a necessidade urgente de desenvolver estratégias para combater a 
                desinformação e promover um ambiente digital mais saudável e inclusivo para o debate político.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Participação Cidadã</Badge>
                <Badge variant="outline">Transparência</Badge>
                <Badge variant="outline">Engajamento Cívico</Badge>
                <Badge variant="outline">Democracia Digital</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )

  const renderEconomia = () => (
    <div className="space-y-8">
      <div className="relative h-64 rounded-lg overflow-hidden">
        <img 
          src={economiaImage} 
          alt="Economia Digital" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white">A Influência das Redes Sociais na Economia Global</h2>
        </div>
      </div>

      <Tabs defaultValue="positivos" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="positivos">Pontos Positivos</TabsTrigger>
          <TabsTrigger value="negativos">Pontos Negativos</TabsTrigger>
          <TabsTrigger value="contribuicao">Contribuição</TabsTrigger>
        </TabsList>

        <TabsContent value="positivos" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-xl text-green-700">Novas Oportunidades</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Abriram novas oportunidades de negócio e marketing para empresas de todos os portes, desde pequenos empreendedores a grandes corporações.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-xl text-green-700">E-commerce Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Facilitam o comércio eletrônico, permitindo que produtos e serviços alcancem um público global com custos reduzidos.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-xl text-green-700">Economia da Atenção</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Surgimento de novas profissões como influenciadores digitais e criadores de conteúdo que monetizam sua presença online.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-xl text-green-700">Inovação</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Acesso rápido a informações de mercado, tendências de consumo e feedback de clientes, impulsionando a inovação.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="negativos" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <AlertTriangle className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle className="text-xl text-red-700">Concentração de Poder</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Crescente concentração de poder e dados nas mãos de poucas Big Techs, levantando preocupações sobre monopólios.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <AlertTriangle className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle className="text-xl text-red-700">Precarização do Trabalho</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A economia gig impulsionada pelas plataformas pode levar à precarização do trabalho e instabilidade profissional.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <AlertTriangle className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle className="text-xl text-red-700">Privacidade de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Questões de privacidade de dados e exploração de informações pessoais para fins comerciais.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <AlertTriangle className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle className="text-xl text-red-700">Consumo Excessivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Influência nos hábitos de consumo, impulsionando endividamento através de publicidade direcionada.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contribuicao">
          <Card>
            <CardHeader>
              <CardTitle>Contribuição para a Sociedade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                As redes sociais remodelaram as relações de trabalho, o consumo e a estrutura econômica global. 
                Elas são ferramentas poderosas para o crescimento e a inovação.
              </p>
              <p>
                No entanto, exigem uma regulamentação cuidadosa para garantir que seus benefícios sejam amplamente 
                distribuídos e que os riscos associados à concentração de poder e à exploração de dados sejam mitigados.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Empreendedorismo</Badge>
                <Badge variant="outline">Inovação</Badge>
                <Badge variant="outline">Mercado Global</Badge>
                <Badge variant="outline">Economia Digital</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )

  const renderSocial = () => (
    <div className="space-y-8">
      <div className="relative h-64 rounded-lg overflow-hidden">
        <img 
          src={socialImage} 
          alt="Impacto Social" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white">Redes Sociais e as Novas Configurações Sociais</h2>
        </div>
      </div>

      <Tabs defaultValue="positivos" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="positivos">Pontos Positivos</TabsTrigger>
          <TabsTrigger value="negativos">Pontos Negativos</TabsTrigger>
          <TabsTrigger value="contribuicao">Contribuição</TabsTrigger>
        </TabsList>

        <TabsContent value="positivos" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-xl text-green-700">Conexão Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Facilitam a conexão entre pessoas, permitindo que amigos e familiares se mantenham em contato independentemente da distância.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                <CardTitle className="text-green-700">Comunidades</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Criação de comunidades para grupos minoritários ou indivíduos com interesses específicos, oferecendo senso de pertencimento.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                <CardTitle className="text-green-700">Amplificação de Vozes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Amplificam vozes e pautas sociais, dando visibilidade a causas importantes de direitos humanos e justiça social.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle className="text-2xl text-green-700">Mobilização Social</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Mobilizam a opinião pública em torno de questões importantes como meio ambiente e direitos humanos.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="negativos" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <AlertTriangle className="h-6 w-6 text-red-600 mb-2" />
                <CardTitle className="text-red-700">Saúde Mental</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Impactos negativos na saúde mental, incluindo ansiedade, depressão e baixa autoestima causados por comparações constantes.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-6 w-6 text-red-600 mb-2" />
                <CardTitle className="text-red-700">Cyberbullying</CardTitle>
              </CardHeader>
              <CardContent>
                <p>O cyberbullying e a violência online são problemas sérios, afetando principalmente jovens e adolescentes.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-6 w-6 text-red-600 mb-2" />
                <CardTitle className="text-red-700">Isolamento Social</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Paradoxalmente, o uso excessivo pode levar ao isolamento social, onde a interação virtual substitui a conexão face a face.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <AlertTriangle className="h-6 w-6 text-red-600 mb-2" />
                <CardTitle className="text-red-700">Superficialidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A superficialidade das relações digitais pode comprometer a qualidade dos vínculos humanos autênticos.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contribuicao">
          <Card>
            <CardHeader>
              <CardTitle>Contribuição para a Sociedade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                As redes sociais redefiniram as interações sociais, a identidade e o bem-estar dos indivíduos. 
                Elas oferecem ferramentas poderosas para a conexão e a mobilização social.
              </p>
              <p>
                No entanto, exigem uma conscientização sobre seus riscos e o desenvolvimento de estratégias para 
                promover um uso mais saudável e equilibrado, garantindo que a tecnologia sirva ao bem-estar humano.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Bem-estar</Badge>
                <Badge variant="outline">Conexão Humana</Badge>
                <Badge variant="outline">Saúde Mental</Badge>
                <Badge variant="outline">Comunidade</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )

  const renderSobre = () => (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sobre o Projeto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Objetivo</h3>
            <p className="text-lg">
              Este site foi desenvolvido como parte de um desafio acadêmico que visa explorar a influência dos 
              avanços tecnológicos e do conhecimento sobre direitos e deveres na participação cidadã e na 
              construção da sociedade. O foco principal é a tecnologia das Redes Sociais e seu impacto nas 
              esferas política, econômica e social.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Proposta</h3>
            <p>
              O objetivo deste projeto é defender e esclarecer o papel desempenhado pelas redes sociais nas 
              três esferas abordadas, apresentando seus pontos positivos e negativos, e sua contribuição para a sociedade.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Equipe</h3>
            <p>Este projeto foi desenvolvido pela equipe 5 com ajuda da ferramenta Manus AI.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Datas Importantes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Data de Entrega</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600">20 de agosto</p>
                  <p className="text-sm text-muted-foreground">Quarta-feira</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Data de Apresentação</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600">26 de agosto</p>
                  <p className="text-sm text-muted-foreground">Terça-feira</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderReferencias = () => (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Referências</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Esfera Política</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a href="https://www.unicep.edu.br/post/a-influ%C3%AAncia-das-redes-sociais-na-pol%C3%ADtica-qual-o-real-impacto" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  UNICEP. A Influência das Redes Sociais na Política. Qual o real impacto?
                </a>
              </li>
              <li>
                <a href="https://www.conjur.com.br/2025-jan-24/o-impacto-das-redes-sociais-na-formacao-da-vontade-politica-um-desafio-a-democracia/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  CONJUR. O impacto das redes sociais na formação da vontade política: um desafio à democracia.
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Esfera Econômica</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a href="https://pt.linkedin.com/pulse/influ%C3%AAncia-das-redes-sociais-na-economia-local-e-otto-guilherme-eea4f" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn. A Influência das Redes Sociais na Economia Local e Global.
                </a>
              </li>
              <li>
                <a href="https://www.globalasset.com.br/a-influencia-das-redes-sociais-nos-habitos-de-consumo/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Global Asset. A influência das redes sociais nos hábitos de consumo.
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Esfera Social</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a href="https://graduacao.afya.com.br/outras-graduacoes/papel-das-redes-sociais-na-sociedade" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Afya Educação. O papel das redes sociais na sociedade: entenda os impactos.
                </a>
              </li>
              <li>
                <a href="https://draanabeatriz.com.br/os-impactos-das-redes-sociais-na-vida-social/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Dra. Ana Beatriz Barbosa Silva. Os Impactos das Redes Sociais na Vida Social.
                </a>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return renderHome()
      case 'politica': return renderPolitica()
      case 'economia': return renderEconomia()
      case 'social': return renderSocial()
      case 'sobre': return renderSobre()
      case 'referencias': return renderReferencias()
      default: return renderHome()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Redes Sociais & Sociedade</h1>
            <div className="flex space-x-2">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "ghost"}
                    onClick={() => setActiveSection(section.id)}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden md:inline">{section.title}</span>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Projeto Acadêmico - O Impacto das Redes Sociais na Sociedade
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Desenvolvido pela Equipe 5
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

