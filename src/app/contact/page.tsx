import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div>
      <div className="bg-gray-100 py-5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2">
            Proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div
        id="mapid"
        style={{ width: "100%", height: "300px" }}
        className="bg-gray-300 flex items-center justify-center"
      >
        <p>Map Placeholder</p>
      </div>

      <div className="container py-5">
        <div className="py-5">
          <form className="col-md-9 m-auto" method="post" role="form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
              <div>
                <label htmlFor="inputname">Name</label>
                <Input
                  type="text"
                  className="mt-1"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="inputemail">Email</label>
                <Input
                  type="email"
                  className="mt-1"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputsubject">Subject</label>
              <Input
                type="text"
                className="mt-1"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputmessage">Message</label>
              <Textarea
                className="mt-1"
                id="message"
                name="message"
                placeholder="Message"
                rows={8}
              />
            </div>
            <div className="text-right mt-2">
              <Button type="submit" size="lg">
                Let’s Talk
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
