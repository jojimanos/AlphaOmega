import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthPage from "./auth/authPage";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";

function IndexPageTemplate(props: { mainsets: any }): JSX.Element {
  const { mainsets } = props || {};

  const {
    main_title,
    description,
    OldTest,
    NewTest,
    Old_description,
    New_description,
    powered,
    login,
    signup,
    email,
    emailPlaceholder,
    emailError,
    password,
    passwordPlaceholder,
    passwordError,
    notAMember,
    alreadyAMember,
    submit,
  } = mainsets || {};

  const { locale, locales, asPath } = useRouter() || {};

  const [currentAuthState, setCurrentAuthState] = useState("unauthorised");

  const [user] = useAuthState(auth);

  // const userId = typeof window === 'undefined' ? localStorage.getItem('user') : null

  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("user");
    if (userId !== null) {
      setCurrentAuthState("authorised");
    } else {
      setCurrentAuthState("unauthorised");
    }
    router.push("/");
  }, [user]);

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>{main_title as string}</h1>

        <p className={styles.description}>{description as string}</p>

        {currentAuthState === "authorised" ? (
          <div className={styles.grid}>
            <Link href={"/text/oldtest/books" || ""}>
              <div className={styles.card}>
                <h2>{OldTest as string} &rarr;</h2>
                <p>{Old_description as string}</p>
              </div>
            </Link>

            <Link href={"/text/newtest/books" || ""}>
              <div className={styles.card}>
                <h2>{NewTest as string} &rarr;</h2>
                <p>{New_description as string}</p>
              </div>
            </Link>
          </div>
        ) : (
          <Flex align="center" justify="center">
            <AuthPage
              login={login}
              signup={signup}
              email={email}
              emailPlaceholder={emailPlaceholder}
              emailError={emailError}
              password={password}
              passwordPlaceholder={passwordPlaceholder}
              passwordError={passwordError}
              notAMember={notAMember}
              alreadyAMember={alreadyAMember}
              submit={submit}
            />
          </Flex>
        )}
      </main>
    </div>
  );
}

export default IndexPageTemplate;
