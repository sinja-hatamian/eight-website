import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  // Label,
  // LanguageSwitch,
  // LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("ارتباط")}</Language>
              <Large to="/">{t("می‌تونی با ما صحبت کنی")}</Large>
              <Para>
                {t(`آیا سوالی دارید؟ بهمون پیام بدید`)}
              </Para>
              <a href="mailto:info@eightco.xyz">
                <Chat>{t(`شروع کنید`)}</Chat>
              </a>
            </Col>
            {/* <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/" left="true">
                {t("Application Security")}
              </Large>
              <Large left="true" to="/">
                {t("Software Principles")}
              </Large>
            </Col> */}
            <Col lg={3} md={6} sm={12} xs={12}>
              <Empty />
              {/* <Large left="true" to="/">
                {t("Support Center")}
              </Large>
              <Large left="true" to="/">
                {t("Customer Support")}
              </Large> */}
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("آدرس")}</Language>
              <Para>ایران-مشهد</Para>
              <Para>خیابان صیاد شیرازی</Para>
              <Para>صیاد شیرازی ۳۶ پلاک ۲۹</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("شرکت ها")}</Title>
              {/* <Large left="true" href="https://ozhan.agency" >
                {t("آژانس دیجیتال مارکتینگ اوژن")}
              </Large>
              <Large left="true" to="/">
                {t("آژانس ایده پردازی ایدکر")}
              </Large>
              <Large left="true" to="/">
                {t("آژانس تبلیغاتی چلیپا")}
              </Large> */}
              <a href="https://ozhan.agency">
              آژانس بازاریابی و فروش اوژن
              </a>
              <br></br>
              <a href="">
              آژانس ایده پردازی ایدکر
              </a>
              <br></br>
              <a href="">
              آژانس تبلیغاتی چلیپا
              </a>
            </Col>
            {/* <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col> */}
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.png"
                  aria-label="homepage"
                  width="150px"
                  height="60px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.png"
              />
              <SocialLink
                href="https://www.linkedin.com/company/eightgroup"
                src="linkedin.png"
              />
               <SocialLink
                href="https://instagram.com/eight_org?utm_medium=copy_link"
                src="instagram.png"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
