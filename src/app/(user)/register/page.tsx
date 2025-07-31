import { Noto_Kufi_Arabic } from "next/font/google";


const notoKufiArabic = Noto_Kufi_Arabic({subsets:["arabic"], weight:["400", "700"]});


const Register = () => {
  return (
    <div className={`${notoKufiArabic.className}`}>مرحبا بكم في تسجيل الدخول الي الموقع</div>
  )
}

export default Register