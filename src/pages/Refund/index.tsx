import { Breadcrump, Meta } from "@/components";

const Refund = () => {
  return (
    <>
      <Meta>
        <title>Refund Policy</title>
        <meta name="description" content="Refund Policy" />
      </Meta>

      <div className="pg-refund">
        <div className="breadcrump">
          <Breadcrump
            links={[
              { name: "Home", link: "/" },
              { name: "Refund Policy", link: "/refund" },
            ]}
          />
        </div>

        <div className="pg-content">
          <div className="container-xxl"></div>
        </div>
      </div>
    </>
  );
};

export default Refund;
