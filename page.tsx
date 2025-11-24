import { MarketingLayout } from '@/components/layouts/marketing-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, ImageIcon, MessageSquare, Sparkles, TrendingUp, Clock, CheckCircle2, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <MarketingLayout>
      <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
              <Sparkles className="h-3 w-3 mr-1 inline" />
              Propulsé par l'IA
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              L'IA qui automatise votre{' '}
              <span className="text-accent">prospection immobilière</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Générez des annonces professionnelles, optimisez vos photos et qualifiez vos prospects automatiquement. 
              Gagnez des heures chaque jour avec ESTATE SMART.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 h-12 px-8">
                <Link href="/signup">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-8">
                <Link href="/#fonctionnalites">Découvrir les modules</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Essai gratuit de 14 jours · Aucune carte bancaire requise
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fonctionnalites" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trois modules puissants pour votre réussite
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des outils IA conçus spécifiquement pour les agents immobiliers français
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-accent/50 transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Générateur d'annonces IA</CardTitle>
                <CardDescription>
                  Créez des descriptions professionnelles en 3 versions (longue, courte, LeBonCoin)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Adaptation automatique au type de bien</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Optimisation SEO intégrée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Export en un clic</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Amélioration photo IA</CardTitle>
                <CardDescription>
                  Sublimez vos photos immobilières avec l'intelligence artificielle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Correction automatique de l'éclairage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Amélioration des couleurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Upload en masse</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Scoring de prospects</CardTitle>
                <CardDescription>
                  Qualifiez et contactez vos prospects avec les bons messages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Score chaud/tiède/froid automatique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Messages WhatsApp pré-écrits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Scripts d'appel personnalisés</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Avant / Après ESTATE SMART
            </h2>
            <p className="text-lg text-muted-foreground">
              Transformez votre façon de travailler
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-destructive">Avant</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Clock className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>2 heures pour rédiger une annonce complète</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Clock className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Retouche photo manuelle chronophage</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Clock className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Qualification prospect au feeling</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Clock className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>Messages non personnalisés</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent">Après</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <TrendingUp className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
                  <span>5 minutes pour 3 versions d'annonce</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <TrendingUp className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
                  <span>Photos optimisées automatiquement</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <TrendingUp className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
                  <span>Score de qualification instantané</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <TrendingUp className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
                  <span>Messages et scripts personnalisés en 1 clic</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-muted-foreground">
              Des agents immobiliers français satisfaits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  "ESTATE SMART m'a fait gagner un temps précieux. Les annonces générées sont de qualité professionnelle."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10" />
                  <div>
                    <p className="font-semibold text-sm">Sophie Durand</p>
                    <p className="text-xs text-muted-foreground">Agent immobilier, Paris</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  "Le module de scoring m'aide à prioriser mes prospects. Mon taux de conversion a doublé !"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10" />
                  <div>
                    <p className="font-semibold text-sm">Marc Lefebvre</p>
                    <p className="text-xs text-muted-foreground">Agent indépendant, Lyon</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  "L'amélioration photo est bluffante. Mes annonces se démarquent vraiment sur les portails."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10" />
                  <div>
                    <p className="font-semibold text-sm">Claire Martin</p>
                    <p className="text-xs text-muted-foreground">Agence immobilière, Bordeaux</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tarifs simples et transparents
            </h2>
            <p className="text-lg text-muted-foreground">
              Choisissez le plan qui correspond à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Pour les agents débutants</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">29€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>50 annonces générées/mois</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>100 photos améliorées/mois</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>20 scorings prospects/mois</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/signup">Commencer</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-accent/50 border-2 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground">Populaire</Badge>
              </div>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>Pour les professionnels actifs</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">79€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>Annonces illimitées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>Photos illimitées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>Scorings illimités</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>Support prioritaire</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/signup">Commencer</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business</CardTitle>
                <CardDescription>Pour les agences</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">199€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>Tout illimité</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>10 utilisateurs inclus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span>Support dédié</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/signup">Nous contacter</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Prêt à automatiser votre prospection ?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Rejoignez des centaines d'agents immobiliers qui utilisent déjà ESTATE SMART pour gagner du temps
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" asChild className="h-12 px-8">
              <Link href="/signup">
                Essai gratuit 14 jours
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      </div>
    </MarketingLayout>
  )
}
