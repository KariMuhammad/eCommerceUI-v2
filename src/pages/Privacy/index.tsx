import { Breadcrump, Meta, PrivacyBox } from "@/components";

const Privacy = () => {
  return (
    <>
      <Meta>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy" />
      </Meta>

      <div className="pg-privacy">
        <div className="breadcrump">
          <Breadcrump
            links={[
              { name: "Home", link: "/" },
              { name: "Privacy Policy", link: "/privacy-policy" },
            ]}
          />
        </div>

        <div className="pg-content">
          <div className="container-xxl">
            <div className="privacy-boxes">
              <PrivacyBox
                title="dolores dolorem iusto aspernatur inventore eos? Sapiente
                pariatur repellat"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                cumque recusandae fugit nam in dignissimos, doloremque esse
                maxime fuga ea distinctio iure odio ipsa vel voluptates cum?
                Voluptate, nobis? Eveniet? Quas quod temporibus alias
                inventore voluptatibus et ea magnam facere sapiente magni?
                Delectus quisquam ullam temporibus deserunt debitis cum vel
                eum voluptatum illo. Pariatur ab accusantium impedit unde,
                explicabo eligendi."
              />
              <PrivacyBox
                title="dolores dolorem iusto aspernatur inventore eos? Sapiente
                pariatur repellat"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                cumque recusandae fugit nam in dignissimos, doloremque esse
                maxime fuga ea distinctio iure odio ipsa vel voluptates cum?
                Voluptate, nobis? Eveniet? Quas quod temporibus alias
                inventore voluptatibus et ea magnam facere sapiente magni?
                Delectus quisquam ullam temporibus deserunt debitis cum vel
                eum voluptatum illo. Pariatur ab accusantium impedit unde,
                explicabo eligendi."
              />
              <PrivacyBox
                title="dolores dolorem iusto aspernatur inventore eos? Sapiente
                pariatur repellat"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                cumque recusandae fugit nam in dignissimos, doloremque esse
                maxime fuga ea distinctio iure odio ipsa vel voluptates cum?
                Voluptate, nobis? Eveniet? Quas quod temporibus alias
                inventore voluptatibus et ea magnam facere sapiente magni?
                Delectus quisquam ullam temporibus deserunt debitis cum vel
                eum voluptatum illo. Pariatur ab accusantium impedit unde,
                explicabo eligendi."
              />
              <PrivacyBox
                title="dolores dolorem iusto aspernatur inventore eos? Sapiente
                pariatur repellat"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                cumque recusandae fugit nam in dignissimos, doloremque esse
                maxime fuga ea distinctio iure odio ipsa vel voluptates cum?
                Voluptate, nobis? Eveniet? Quas quod temporibus alias
                inventore voluptatibus et ea magnam facere sapiente magni?
                Delectus quisquam ullam temporibus deserunt debitis cum vel
                eum voluptatum illo. Pariatur ab accusantium impedit unde,
                explicabo eligendi."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
