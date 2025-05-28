 document.getElementById('buildForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const form = e.target;
      const type = form.type.value;
      const cpu = form.cpu.value.trim();
      const gpu = form.gpu.value.trim();
      const ram = form.ram.value.trim();
      const os = form.os.value.trim();

      const subject = encodeURIComponent("Custom Build Request – " + type);
      const body = encodeURIComponent(
        `Hello ARZA,\n\nI'd like to request a custom ${type} build with the following specs:\n\n` +
        `CPU: ${cpu}\nGPU: ${gpu}\nRAM: ${ram}\nOS: ${os}\n\n` +
        `Please contact me with a quote or next steps.\n\nThanks.`
      );

      const mailtoLink = `mailto:support@arza.tech?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    });
