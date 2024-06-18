export enum LINKS {
   REGISTER = 'http://localhost/starsback/auth/register.php',
   SIGNIN = 'http://localhost/starsback/auth/signin.php',
   ADDCAT = 'http://localhost/starsback/addcat.php',
   VIEWCATS = 'http://localhost/starsback/viewcats.php',
   VIEWCURRENTCAT = 'http://localhost/starsback/viewcurrentcat.php',
}

// auth
export type RegForm = {
   email: string,
   username: string,
   name: string,
   surname: string,
   password: string,
   chpassword?: string,
}
export type SigninForm = {
   email: string,
   password: string,
   remember?: boolean
}

export type IUser = {
   id: number,
   username: string,
   name: string,
   surname: string,
   token?: string,
   email: string
}

// cats
export type IAddCat = {
   uid: number,
   cat: number,
}
export type IViewCats = {
   user_cat_id: number, 
   cat: number
}

// api 
export type IHeaders = {
   [key: string]: string
}




