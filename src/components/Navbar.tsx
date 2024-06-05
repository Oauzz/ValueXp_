import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react'
import UserAccountNav from './UserAccountNav'
import MobileNav from './MobileNav'
import { getUserSubscriptionPlan } from '@/lib/stripe'
import { db } from '@/db'




const Navbar = async () => {
  const { getUser } = getKindeServerSession()
  const user_ = await getUser()
  const dbUser = await db.user.findFirst({
    where: {
        id: user_?.id
    }
    })
  if(!user_||!user_.id||!dbUser) 
    return (
      <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link
            href='/'
            className='flex z-40 font-semibold'>
            <span>ValueXp.</span>
          </Link>

          <MobileNav isAuth={!!user_} />

          <div className='hidden items-center space-x-4 sm:flex'>
                  <Link
                    href='/pricing'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}>
                    Tarifs
                  </Link>
                  <LoginLink
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}>
                    Se Connecter
                  </LoginLink>
                  <RegisterLink
                    className={buttonVariants({
                      size: 'sm',
                    })}>
                    S&apos;Inscrire{' '}
                    <ArrowRight className='ml-1.5 h-5 w-5' />
                  </RegisterLink>
                
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
    const subscriptionPlan = await getUserSubscriptionPlan()
    
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link
            href='/'
            className='flex z-40 font-semibold'>
            <span>ValueXp.</span>
          </Link>

          <MobileNav isAuth={!!user_} />

          <div className='hidden items-center space-x-4 sm:flex'>

            
              {dbUser.role=="admin" ? 
              (
                  <>
                      <Link
                            href='/main/estimation'
                            className={buttonVariants({
                              variant: 'ghost',
                              size: 'sm',
                            })}>
                            Estimation
                      </Link>
                      <Link
                            href='/main/notification'
                            className={buttonVariants({
                              variant: 'ghost',
                              size: 'sm',
                            })}>
                            Notifications
                      </Link>
                      <Link
                            href='/main/stats'
                            className={buttonVariants({
                              variant: 'ghost',
                              size: 'sm',
                            })}>
                            Statistiques
                      </Link>
                      <Link
                            href='/main/adminDashboard'
                            className={buttonVariants({
                              variant: 'ghost',
                              size: 'sm',
                            })}>
                              Tableau de bord
                      </Link>
                  </>
              ):(
              <>
                {subscriptionPlan?.isSubscribed ? 
                  (
                  <>
                  <Link
                        href='/main/estimation'
                        className={buttonVariants({
                          variant: 'ghost',
                          size: 'sm',
                        })}>
                        Estimation
                  </Link>
                  <Link
                        href='/main/notification'
                        className={buttonVariants({
                          variant: 'ghost',
                          size: 'sm',
                        })}>
                        Notifications
                  </Link>
                  <Link
                        href='/main/stats'
                        className={buttonVariants({
                          variant: 'ghost',
                          size: 'sm',
                        })}>
                        Statistiques
                  </Link>
                  </>
                ) : (
                <>
                  <Link
                    href='/pricing'
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}>
                    Tarifs
                  </Link>
                  <Link
                  href='/main/estimation'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Estimation
                  </Link>
                  <Link
                  href='/main/notification'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Notifications
                  </Link>
                  </>
                )}
                
                      </>

              )
            }
            <UserAccountNav
                          name={
                          !user_?.given_name || !user_?.family_name
                              ? 'Your Account'
                              : `${user_?.given_name} ${user_?.family_name}`
                          }
                          email={user_?.email ?? ''}
                          imageUrl={user_?.picture ?? ''}
                          role={dbUser.role ?? ''}
                      />
            
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar