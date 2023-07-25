import "./App.scss"
import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import logo from "./assets/logo_white_font_horizontal.png"
import phone from "./assets/phone.png"
import mixpanel from "mixpanel-browser"

function App() {
  useEffect(() => {
    mixpanel.init("83edb56a1a2c860192ed4064661d543c")
    mixpanel.track("Page Load", { host: window.location.host })
  }, [])

  const handleButtonClick = (type) => {
    mixpanel.track("Button Click", {
      Type: type,
    })
    const url = "https://forms.gle/UbwYKGxuZZeDmpTt9"
    window.open(url, "_blank")
  }

  const startNowButton = (cssClass) => {
    return (
      <button onClick={() => handleButtonClick(cssClass)} className={cssClass}>
        Learn more
      </button>
    )
  }

  const Home = () => {
    return (
      <>
        <div className='fakeheader'>
          <img className='logo' src={logo} />
          {startNowButton("actionblack")}
        </div>

        <div className='bottom'>
          <div className='content'>
            <div className='textbig'>
              TodosX makes running a dance company simple.
            </div>
            <div className='textsmall'>
              We manage your core business activities so you can focus on
              creating, performing and thriving
            </div>
            {startNowButton("actionwhite")}
          </div>
          <div className='phonediv'>
            <img className='phoneImg' src={phone} />
          </div>
        </div>
      </>
    )
  }

  const Support = () => {
    return (
      <div className='contentText'>
        <div className='textbig'>How can we help you?</div>
        <div className='textsmall'>
          For support, email us at <span>support@todosx.com</span>
          <div className='textsmall'>2023 Todosx Inc.</div>
        </div>
      </div>
    )
  }

  const PrivacyPolicy = () => {
    return (
      <div className='contentText'>
        <div className='textbig'>Privacy Policy</div>
        <div className='textsmall'>
          TodosX Privacy Policy Effective Date: July 19, 2023 Thank you for
          choosing TodosX. This Privacy Policy is intended to help you
          understand how we collect, use, disclose, and safeguard your personal
          information when you use our mobile application (the "App") to process
          payments and transactions between dance companies and their member
          customers. We are committed to protecting your privacy and ensuring
          the security of your personal information. Information We Collect:
          Name, Phone Number, email address 1.1. Personal Information: When you
          sign up for an account on our App, we may collect personal information
          such as your name, email address, phone number, and dance company
          affiliation. To process payments and transactions, we may collect
          payment information, including credit/debit card details, billing
          address, and transaction history. In order to provide a personalized
          experience, we may collect information about your preferences, dance
          interests, and activity within the App. 1.2. Non-Personal Information:
          We may collect non-personal information, such as device information
          (e.g., device type, operating system), app usage data, and anonymized
          analytics to improve our services. Use of Information: information
          will be used to tailor the software to the target user. 2.1. Providing
          Services: We use your personal information to create and maintain your
          account, process payments, and facilitate transactions between dance
          companies and their member customers. 2.2. Communication: We may use
          your email address and phone number to send transaction receipts,
          customer support responses, and important service-related
          notifications. 2.3. Personalization: To enhance your experience, we
          may use your preferences and app activity to personalize content,
          recommendations, and offers. 2.4. Analytics and Improvements: We
          collect non-personal information for statistical and analytical
          purposes to understand user behavior, app performance, and improve our
          services. 3.1. Service Providers: We may share your personal
          information with trusted third-party service providers that assist us
          in providing our services (e.g., Stripe). 3.2. Legal Requirements: We
          may disclose your personal information if required to comply with
          applicable laws, regulations, legal processes, or governmental
          requests. 3.3. Business Transactions: In the event of a merger,
          acquisition, or sale of all or a portion of our assets, your personal
          information may be transferred as part of the transaction, subject to
          the acquirer's commitment to privacy obligations. Data Security: We
          implement reasonable technical and organizational measures to protect
          your personal information from unauthorized access, disclosure,
          alteration, or destruction. However, no method of transmission over
          the internet or electronic storage is completely secure, and we cannot
          guarantee the absolute security of your data. Your Choices: we do not
          store user information other than name, email address and phone
          number. 5.3. Data Deletion: If you wish to delete your account and
          associated data, please contact us at support@todosx.com. Our services
          are not directed to individuals under the age of 13. We do not
          knowingly collect personal information from children. If we become
          aware that we have inadvertently collected personal information from a
          child under 13, we will take steps to delete such information. Changes
          to this Privacy Policy: We may update this Privacy Policy from time to
          time to reflect changes in our practices or for other operational,
          legal, or regulatory reasons. We will notify you of any material
          changes by posting the updated Privacy Policy on the App or through
          other communication methods. Please review this Privacy Policy
          periodically. Contact Us: If you have any questions, concerns, or
          requests related to this Privacy Policy, please contact us at
          support@todosx.com]. By using the App, you agree to the terms of this
          Privacy Policy. If you do not agree with our practices, please refrain
          from using the App. Thank you for trusting TodosX TodosX
          support@todosx
          <div className='textsmall'>2023 Todosx Inc.</div>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className='App'>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/support' element={<Support />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/support'>Support</Link>
          </li>
          <li>
            <Link to='/privacy'>Privacy Policy</Link>
          </li>
        </ul>
      </nav>
    </Router>
  )
}

export default App
